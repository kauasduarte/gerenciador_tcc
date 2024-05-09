import styles from './Login.module.css'
import { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export function LoginPesquisarTCC() {


    // resgatar o nome do usuário pelo back usando o id do cookie:
    const [usuario, setUsuario] = useState({
        user_id: Cookies.get('user_id'), 
        user_name: '',
    });
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/getUser/${usuario.user_id}`);
            const firstUserName = response.data.length > 0 ? response.data[0].name : '';
            setUsuario((prevUsuario) => ({ ...prevUsuario, user_name: firstUserName }));
          } catch (error) {
            console.error(error);
          }
        };    
        fetchData();
      }, [usuario.user_id]);    

    
    const [clube, setClube] = useState({
        nick_club: '', // Valor padrão para 'nick_club'
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    async function buscar(e) {
        e.preventDefault();

        const config = {
        headers: {
            'Content-Type': 'application/json',
        },
        };

        try {
            const response = await axios.get(
              `http://127.0.0.1:8000/api/club/getClubByNickClub/${clube.nick_club}`,
              config
            );
          
            // Verifique se há pelo menos um clube na resposta
            if (response.data.length > 0) {
              const club = response.data[0];
              console.log(club)
          
              // Agora, você pode acessar o id do clube
              const club_id = club.id;
              console.log(club_id)
              const club_name = club.name;
              console.log(club_name)
          
              Cookies.set('temp_club_id', club_id, { expires: 7 });              
              Cookies.set('club_name', club_name, { expires: 7 });
          
              setStatus('tcc encontrado');
              // alert('TCC encontrado com sucesso!');
              setClube({});
          
              // Redireciona para a página desejada
              navigate('/entrartcc');
            } else {
              // Lida com o caso em que nenhum clube é encontrado
              setStatus('Nenhum TCC encontrado');
              alert('Nenhum TCC encontrado');
            }
          } catch (error) {
            setStatus('Nenhum TCC encontrado');
            alert('Nenhum TCC encontrado');
          }
    }
    return(
        <>
            <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span className={styles.textDestaque}>{usuario.user_name}</span>
                    </p>

                </div>

                <p className={styles.textLogin}>
                    Entre em um projeto existente!
                </p>

                <form onSubmit={buscar} className={styles.loginForm}>
                    {/* <div className="form-group">
                        <label htmlFor='clubeInput'>Digite o nome do clube</label>
                        <input 
                            type='text' 
                            id='clubeInput'
                            placeholder='Klubinho'
                            className="form-control">
                        </input>
                    </div> */}
                    
                    <div className="form-group">
                        <label htmlFor='codeInput'>Projeto de TCC:</label>
                        <input 
                            type='text' 
                            id='codeInput'
                            placeholder='Digite o código do projeto de TCC'
                            value={clube.nick_club || ''}
                            className='form-control'
                            onChange={(e) => setClube({...clube, nick_club:e.target.value})}
                            required/>    
                    </div>

                    <p><a href='/criartcc'>Criar Novo Projeto</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type="submit" className="btn btn-lg btn-block">Pesquisar</button>
                    </div>
                </form>
        </>
    )
}