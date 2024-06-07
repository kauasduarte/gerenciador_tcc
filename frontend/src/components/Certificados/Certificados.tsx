import { Link } from "react-router-dom";
import styles from './Certificados.module.css';
import image from '../../assets/certificado.jpg';

export function Certificados() {



    return (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <div className={`${styles.titulo}`}>
                  <h1>Certificados</h1>
                </div>
                <div>
                  <Link className="nav-link" to={"/certificados"}>
                    <button>Gerar certificados</button>
                  </Link>
                </div>
              </div>
              <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
            </div>
            <main className={`${styles.membros}`}>
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
          </main>
          </div>

        </>
    )
}