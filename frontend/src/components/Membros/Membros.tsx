import { useState, useEffect } from 'react';
import styles from './Membros.module.css';
import Cookies from 'js-cookie';
import axios from 'axios';

export function Membros() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user_project/getProjectWithUsers/1');
        setMembers(response.data); // Assume-se que a resposta é um array diretamente
      } catch (error) {
        console.error('Erro ao buscar membros:', error);
      }
    }

    fetchMembers();
  }, []);

  const projeto_id = Cookies.get('user_id');

  return (
    <>
      <div className="container">
        <header className="row">
          <div className={`col-md-12 d-flex justify-content-between align-items-center ${styles.titulo}`}>
            <h1 className="align-left">Membros</h1>
            <h3 className="align-right">Código do Projeto: {projeto_id}</h3>
          </div>
          <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
        </header>
        <main className={`${styles.membros}`}>
          {members.map(member => (
            <section key={member.user_id}>
              <h3>{member.name}</h3>
              <p>{member.tipo_usuario}</p>
              <button>Remover</button>
            </section>
          ))}
        </main>
      </div>
    </>
  )
}
