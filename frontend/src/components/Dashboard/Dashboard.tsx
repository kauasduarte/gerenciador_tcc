import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css"

import ptBR from 'date-fns/locale/pt-BR';
import { format, addDays } from 'date-fns';

interface Dashboard {
  id: number;
  titulo: string;
  descricao: string;
  prazo: string;
  status: boolean;
}


export function Dashboard() {
  
  const [tarefa, setTarefa] = useState<Dashboard[]>([]);
  const [loading, setLoading] = useState(true);
  // const club_id = Cookies.get('club_id');

  const tarefasPorData = {};
    tarefa.forEach(tarefas => {
        const prazoTarefa = format(addDays(new Date(tarefas.prazo), 1), "dd 'de' MMMM 'de' yyyy", { locale: ptBR });
        if (!tarefasPorData[prazoTarefa]) {
            tarefasPorData[prazoTarefa] = [];
        }
        tarefasPorData[prazoTarefa].push(tarefas);
    });

     // Função para formatar a descrição com quebra de linha a cada 60 caracteres
     const formatarDescricao = (descricao: string) => {
      if (descricao.length > 60) {
          return descricao.match(/.{1,60}/g).join('\n');
      }
      return descricao;
  };

    return (
        <>
          <div className="container">
            <header className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <div className={`${styles.titulo}`}>
                  <h1>Tarefas</h1>
                </div>
                <div>
                  <Link className="nav-link" to={"/criartarefa"}>
                    <button>Criar Tarefa</button>
                  </Link>
                </div>
              </div>
              <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
            </header>

            <main className={`${styles.main}`}>
              <div className={`${styles.column}`}>
                  <h3>A fazer</h3>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Model Answer</p>
                      <span className={`${styles.tag} ${styles.yellowTag}`}>A Fazer</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Create calendar, chat and email app pages</p>
                      <span className={`${styles.tag} ${styles.yellowTag}`}>A Fazer</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Product Design, Figma, Sketch (Software), Prototype</p>
                      <span className={`${styles.tag} ${styles.yellowTag}`}>A Fazer</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Change email option process</p>
                      <span className={`${styles.tag} ${styles.yellowTag}`}>A Fazer</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Post launch reminder / Post list</p>
                      <span className={`${styles.tag} ${styles.yellowTag}`}>A Fazer</span>
                  </div>
              </div>
              <div className={`${styles.column}`}>
                  <h3>Em processo</h3>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Model Answer</p>
                      <span className={`${styles.tag} ${styles.redTag}`}>Em processo</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Add authentication pages</p>
                      <span className={`${styles.tag} ${styles.redTag}`}>Em processo</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Profile Page Satructure</p>
                      <span className={`${styles.tag} ${styles.redTag}`}>Em processo</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Create calendar, chat and email app pages</p>
                      <span className={`${styles.tag} ${styles.redTag}`}>Em processo</span>
                  </div>
              </div>

              <div className={`${styles.column}`}>
                  <h3>Em revisão</h3>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Model Answer</p>
                      <span className={`${styles.tag} ${styles.purpleTag}`}>Em revisão</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Model Answer</p>
                      <span className={`${styles.tag} ${styles.purpleTag}`}>Em revisão</span>
                  </div>
              </div>

              <div className={`${styles.column}`}>
                  <h3>Concluído</h3>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Model Answer</p>
                      <span className={`${styles.tag} ${styles.greenTag}`}>Concluído</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Create calendar, chat and email app pages</p>
                      <span className={`${styles.tag} ${styles.greenTag}`}>Concluído</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Product Design, Figma, Sketch (Software), Prototype</p>
                      <span className={`${styles.tag} ${styles.greenTag}`}>Concluído</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Model Answer</p>
                      <span className={`${styles.tag} ${styles.greenTag}`}>Concluído</span>
                  </div>
                  <div className={`${styles.taskCard}`}>
                      <p className={`${styles.taskTitle}`}>Create calendar, chat and email app pages</p>
                      <span className={`${styles.tag} ${styles.greenTag}`}>Concluído</span>
                  </div>
              </div>
            </main>
            
            

            {/* {loading ? (
                    <div>Carregando...</div>
                ) : (
                    Object.keys(tarefasPorData).map(data => (
                        <div key={data}>
                            <div className="col">
                                <span className="mt-4">{data}</span>
                            </div>

                            {tarefasPorData[data].map((tarefas) => (
                                <Link to={`/editreunion/${tarefas.id}`} className={`nav-link list-group-flush mt-4 ${styles.customReunion}`} key={reunioes.id}>
                                    <div className="d-flex flex-row mt-4 mb-4">
                                        <div className="list-group-item">
                                            <span className="material-symbols-outlined" style={{ color: '#5b6b77' }}>connect_without_contact</span>
                                            <div className="row d-flex">
                                                <div className="col-md-12 mt-1">
                                                    <span className="d-block">{tarefas.titulo}</span>
                                                    <span style={{ color: '#5b6b77' }}>{formatarDescricao(tarefas.descricao)}</span>
                                                </div>
                                            </div>
                                        </div>            
                                    </div> 
                                </Link> 
                            ))}
                        </div>
                    ))
                )} */}



          </div>

        </>
    )
}