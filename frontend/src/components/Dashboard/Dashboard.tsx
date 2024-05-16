import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css"

interface Dashboard {
  id: number;
  titulo: string;
  descricao: string;
  prazo: string;
  status: boolean;
}


export function Dashboard() {
  


    return (
        <>
          <div className="container">
            <div className="row">
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
            </div>
          </div>

        </>
    )
}