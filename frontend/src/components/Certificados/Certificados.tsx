import { Link } from "react-router-dom";
import styles from './Certificados.module.css';
import image from '../../assets/certificado.jpg';
import axios from 'axios';
import Cookies from 'js-cookie';

export function Certificados() {
    const enviarNota = () => {
        const nota = document.getElementById('nota').value;
        const projeto_id = Cookies.get('projeto_id');

        if (!projeto_id) {
            alert('ID do projeto não encontrado nos cookies.');
            return;
        }

        const url = `http://127.0.0.1:8000/api/projeto/updateaNotaMedia/${projeto_id}`;

        axios.post(url, { nota: nota })
            .then(function(response) {
                alert('Nota enviada com sucesso!');
                console.log(response);
            })
            .catch(function(error) {
                alert('Erro ao enviar a nota.');
                console.error(error);
            });
    };

    const role = Cookies.get('role');

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-between align-items-center">
                        <div className={`${styles.titulo}`}>
                            <h1>Certificados</h1>
                        </div>
                        {(role === 'orientador' || role === 'coordenador') && (
                            <div className={styles.inputGroup}>
                                <h5>Nota Final:</h5>
                                <input type="text" id="nota" placeholder="Nota"/>
                                <button onClick={enviarNota}>Enviar Nota</button>
                            </div>
                        )}
                        <div className={`${styles.headerButtons}`}>
                            <Link className="nav-link" to={"/certificados"}>
                                <button>Gerar certificados</button>
                            </Link>
                        </div>
                    </div>
                    <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
                </div>
                <main className={`${styles.certificados}`}>
                    <section>
                        <img src={`${image}`} alt="certificado" />
                        <p className={`${styles.nomes}`}>André Nery</p>
                        <button>Baixar</button>
                    </section>
                    <section>
                        <img src={`${image}`} alt="certificado" />
                        <p className={`${styles.nomes}`}>Kaua Duarte</p>
                        <button>Baixar</button>
                    </section>
                    <section>
                        <img src={`${image}`} alt="certificado" />
                        <p className={`${styles.nomes}`}>Thalita Bispo</p>
                        <button>Baixar</button>
                    </section>
                </main>
            </div>
        </>
    );
}
