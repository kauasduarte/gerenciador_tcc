import { Link } from "react-router-dom";
import styles from './Certificados.module.css';

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
              <img src="https://ideas.sybernews.com/wp-content/uploads/2020/03/certificate-of-excellence-template-free-download-with-free-certificate-of-excellence-template-scaled.jpg" alt="" />
              <p>André Nery</p>
              <button>Baixar</button>
            </section>
            <section>
              <img src="https://ideas.sybernews.com/wp-content/uploads/2020/03/certificate-of-excellence-template-free-download-with-free-certificate-of-excellence-template-scaled.jpg" alt="" />
              <p>Kaua Duarte</p>
              <button>Baixar</button>
            </section>
            <section>
              <img src="https://ideas.sybernews.com/wp-content/uploads/2020/03/certificate-of-excellence-template-free-download-with-free-certificate-of-excellence-template-scaled.jpg" alt="" />
              <p>Thalita Bispo</p>
              <button>Baixar</button>
            </section>
          </main>
          </div>

        </>
    )
}