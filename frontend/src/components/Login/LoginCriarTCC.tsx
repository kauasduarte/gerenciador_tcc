import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Login.module.css';

export function LoginCriarTCC() {

    const [cadastro, setCadastro] = useState({
        name: '', // Valor padrão para 'name'
        nick_club: '', // Valor padrão para 'nick_club'
    });
    const [status, setStatus] = useState('');
    const navigate = useNavigate();

    // Recupere o id do usuário do cookie
    
    const user_id = Cookies.get('user_id');
    console.log('ID do usuário:', user_id);

    async function gravar(e) {
        e.preventDefault();

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/club/register',
        {
          name: cadastro.name,
          nick_club: cadastro.nick_club,
          user_id: user_id, // Adicione o userId ao corpo da solicitação
        },
        config
      );
      
      console.log(response);

      setStatus('TCC criado');
      alert('TCC criado com sucesso!');
      setCadastro({});

      // Redireciona para a página desejada
      navigate('/');
    } catch (error) {
      setStatus(`Falha: ${error}`);
      alert(`Falha: ${error}`);
    }
  }

    return(
        <>
            <div className={styles.welcome}>
                    <p>
                        <span>Bem-vindo(a) </span>
                        <span className={styles.textDestaque} >Usuário</span>
                    </p>

                </div>

                <p className={styles.textLogin}>Crie um TCC</p>

                <form onSubmit={gravar} className={styles.loginForm}>
                    <div className="form-group">
                        <label htmlFor='tccInput'>Nome do TCC</label>
                        <input 
                            type='text' 
                            id='tccInput'
                            placeholder='Nome do TCC'
                            value={cadastro.name || ''}
                            className='form-control'
                            onChange={(e) => setCadastro({...cadastro, name:e.target.value})}
                      required/>                        
                    </div>
                    <div className="form-group">
                        <label htmlFor='endtcc'>Endereço do TCC</label>
                        <input 
                            type='text' 
                            id='endtcc'
                            placeholder='@klubinho'
                            value={cadastro.nick_club || ''}
                            className='form-control'
                            onChange={(e) => setCadastro({...cadastro, nick_club:e.target.value})}
                            required/>                        
                    </div>
                    <p><a href='/pesquisartcc'>Buscar TCC Existente</a></p>
                    
                    <div className={styles.centerButton}>
                        <button type="submit" className="btn btn-lg btn-block">Criar TCC</button>
                    </div>
                </form>
        </>
    )
}