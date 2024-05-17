import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Login.module.css';

export function LoginCriarTCC() {

    const [cadastro, setCadastro] = useState({
        name: '', // Valor padrão para 'name'
        desc_projeto: '', // Valor padrão para 'desc_projeto'
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
        'http://127.0.0.1:8000/api/tcc/register',
        {
          name: cadastro.name,
          desc_projeto: cadastro.desc_projeto,
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
                        <label htmlFor='desc_projeto'>Descrição do Projeto</label>
                        <input 
                            type='text' 
                            id='desc_projeto'
                            placeholder=''
                            value={cadastro.desc_projeto || ''}
                            className='form-control'
                            onChange={(e) => setCadastro({...cadastro, desc_projeto:e.target.value})}
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