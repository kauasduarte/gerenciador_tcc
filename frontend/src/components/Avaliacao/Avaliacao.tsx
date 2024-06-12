import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Avaliacao.module.css';
import image from '../../assets/certificado.jpg';

export function Avaliacao() {
    const [mostrarConteudo, setMostrarConteudo] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12 d-flex justify-content-between align-items-center">
                    <div className={`${styles.titulo}`}>
                        <h1>Avaliação</h1>
                    </div>
                    <div className={`${styles.buttons}`}>
                        <Link className="nav-link" to={"/avaliacao"}>
                        <button>Avaliar trabalho</button>
                        </Link>
                        <button onClick={() => setMostrarConteudo(!mostrarConteudo)}>
                                Gerar Certificados
                        </button>
                    </div>
                </div>
                <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
            </div>
            <main>
                <div>
                    <h3>Banca</h3>
                    <section className={`${styles.container}`}>
                        <p>Professor 1</p>
                        <p>Professor 2</p>
                        <p>Professor 3</p>
                        <button>Adicionar membros</button>
                        <button>Agendar apresentação</button>
                        
                    </section>
                </div>
                {mostrarConteudo && 
                    <div>
                        <h3>Certificados</h3>
                        <div className={`${styles.certificados}`}>
                            <section>
                                <img src={`${image}`} alt="certificado" />
                                <p>André Nery</p>
                                <button>Baixar</button>
                            </section>
                            <section>
                                <img src={`${image}`} alt="certificado" />
                                <p>Kaua Duarte</p>
                                <button>Baixar</button>
                            </section>
                            <section>
                                <img src={`${image}`} alt="certificado" />
                                <p>Thalita Bispo</p>
                                <button>Baixar</button>
                            </section>
                        </div>
                    </div>
                }
            </main>
        </div>
    )
}