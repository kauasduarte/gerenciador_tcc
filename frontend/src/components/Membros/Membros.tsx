import styles from './Membros.module.css';

export function Membros() {



    return (
      <>
        <div className="container">
          <header className="row">
            <div className="col-md-12 d-flex justify-content-between align-items-center">
              <div className={`${styles.titulo}`}>
                <h1>Membros</h1>
              </div>
            </div>
            <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
          </header>
          <main className={`${styles.membros}`}>
            <section>
              <h3 >André Nery</h3>
              <p>Aluno</p>
              <button>Remover</button>
            </section>
            <section>
              <h3>Nilson Duarte</h3>
              <p>Coordenador</p>
              <button>Remover</button>
            </section>
            <section>
              <h3>Paulo Candido</h3>
              <p>Banca</p>
              <button>Remover</button>
            </section>
            <section>
              <h3>Simone Romano</h3>
              <p>Orientador</p>
              <button>Remover</button>
            </section>
          </main>
        </div>
      </>
    )
}