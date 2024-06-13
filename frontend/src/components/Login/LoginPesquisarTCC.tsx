import styles from './Login.module.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

export function LoginPesquisarTCC() {
    const navigate = useNavigate();

    const [projeto, setProjeto] = useState({
        projeto_id: '',
    });
    const [status, setStatus] = useState('');

    const [usuario, setUsuario] = useState({
        user_id: Cookies.get('user_id'),
    });

    async function gravar(e) {
        e.preventDefault();

        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        try {
            const response = await axios.post(
                'http://127.0.0.1:8000/api/user_project/create',
                {
                    user_id: usuario.user_id,
                    project_id: projeto.projeto_id,
                },
                config
            );

            console.log(response);

            setStatus('projeto ingressado com sucesso');
            alert('Projeto ingressado com sucesso! Faça login com sua nova conta para acessá-lo!');
            Cookies.set('projeto_id', projeto.projeto_id, { expires: 7 });
            //Cookies.remove('temp_tcc_id');
            // Redireciona para a página desejada
            navigate('/');
        } catch (error) {
            setStatus(`Falha: ${error}`);
            alert(`Falha: ${error}`);
        }
    }

    return (
        <>
            <p className={styles.textLogin}>
                Entre em um projeto existente!
            </p>

            <form onSubmit={gravar} className={styles.loginForm}>
                <div className="form-group">
                    <label htmlFor="codeInput">Projeto de TCC:</label>
                    <input
                        type="text"
                        id="codeInput"
                        placeholder="Digite o código do projeto de TCC"
                        value={projeto.projeto_id || ''}
                        className="form-control"
                        onChange={(e) => setProjeto({ ...projeto, projeto_id: e.target.value })}
                        required
                    />
                </div>

                <p><a href="/criartcc">Criar Novo Projeto</a></p>

                <div className={styles.centerButton}>
                    <button type="submit" className="btn btn-lg btn-block">Entrar</button>
                </div>
            </form>
        </>
    );
}
