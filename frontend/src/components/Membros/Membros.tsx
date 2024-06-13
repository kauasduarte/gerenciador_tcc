import { useState, useEffect } from 'react';
import styles from './Membros.module.css';
import Cookies from 'js-cookie';
import axios from 'axios';

export function Membros() {
  const [members, setMembers] = useState([]);  
  const projeto_id = Cookies.get('projeto_id');
  const tipo_usuario = Cookies.get('role');

  
  useEffect(() => {
    async function fetchMembers() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/user_project/getProjectWithUsers/${projeto_id}`);
        setMembers(response.data); // Assume-se que a resposta é um array diretamente
      } catch (error) {
        console.error('Erro ao buscar membros:', error);
      }
    }

    fetchMembers();
  }, []);


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
    {tipo_usuario === 'orientador' || tipo_usuario === 'coordenador' ? (
      <button onClick={async () => {
        if (window.confirm('Tem certeza que deseja remover este usuário?')) {
          try {
            const response = await axios.delete(`http://127.0.0.1:8000/api/user_project/deleteUser/${member.user_id}/${projeto_id}`);
            console.log(response.data);
            // You might want to update the members list here
          } catch (error) {
            console.error(error);
          }
        }
      }}>
        Remover
      </button>
    ) : null}
  </section>
          ))}
        </main>
      </div>
    </>
  )
}
