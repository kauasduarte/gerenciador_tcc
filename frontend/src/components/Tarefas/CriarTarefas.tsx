import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
import { FormEvent, OptionType } from '../types';

import styles from '../Dashboard/Dashboard.module.css';

interface Tarefa {
  titulo?: string;
  descricao?: string;
  documento?: string;
  status?: boolean;
  data_publicacao?: string;
  prazo?: string;
  entrega?: string;
}

export function CreateTarefa() {
    //salvar
    const [tarefa, setTarefa] = useState<Tarefa>({});
    const [, setStatus] = useState<string>('');    
    // const user_id = Cookies.get('user_id');
    // const club_id = Cookies.get('club_id');
    const [, setLoading] = useState<boolean>(true);
    const [selectedOptions, setSelectedOptions] = useState<OptionType[]>([]);
    
  
    async function gravar(e: FormEvent) {
      e.preventDefault();
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
    
  
      try {
        const participantsArray = selectedOptions.map(option => option.value); // Extrai os valores dos participantes
        await axios.post(
          'http://127.0.0.1:8000/api/tarefa/create',
          {
            titulo: tarefa.titulo,
            descricao: tarefa.descricao,
            documento: tarefa.documento,
            status: tarefa.status,
            data_publicacao: tarefa.data_publicacao,
            prazo: tarefa.prazo,
            entrega: tarefa.entrega,
            participants: participantsArray,
            
          },
          config
        );
  
        setStatus('Tarefa cadastrada com sucesso!');
        alert('Tarefa cadastrada com sucesso!');
        setTarefa({});
        setSelectedOptions([]);
      } catch (error) {
        setStatus(`Falha: ${error}`);
        alert(`Falha: ${error}`);
        console.log(error);
      }
    }

    // useEffect(() => {
    //     async function Profile() {
    //       try {
    //         const response = await axios.get(`http://127.0.0.1:8000/api/clubIntegrantes/getClubIntegrantesWithUser/${club_id}`);
    //         setIntegrantes(response.data);
    //         setLoading(false);
    //       } catch (error) {
    //         console.error(error);
    //       }
    //     }
    
    //     Profile();
    //   }, [club_id]);

    //select    

    return(
        <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <div className={`${styles.titulo}`}>
                  <h1>Nova Tarefa</h1>
                </div>
              </div>
              <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
            </div>

            <form className="mt-4" onSubmit={gravar}>
                <div className="form-group mt-4">
                    <label>Título</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="titulo" 
                      placeholder="Título" 
                      value={tarefa.titulo || ''}
                      onChange={(e) => setTarefa({ ...tarefa, titulo: e.target.value })}
                      maxLength={60} 
                      required/>
                </div>
                
                <div className="form-group mt-4">
                    <label>Descrição</label>
                    <textarea 
                        className="form-control" 
                        name="descricao"
                        placeholder="Descrição" 
                        rows={4} 
                        maxLength={255}
                        style={{ resize: 'none' }}
                        value={tarefa.descricao || ''}
                        onChange={(e) => setTarefa({ ...tarefa, descricao: e.target.value })}
                        required
                    />
                </div>

                <div className="form-group mt-4">
                    <label>Documento</label>
                    <input 
                      type="file" 
                      className="form-control" 
                      name="documento" 
                      placeholder="" 
                      value={tarefa.documento || ''}
                      onChange={(e) => setTarefa({ ...tarefa, documento: e.target.value })} 
                      required
                    />
                </div>
                
                <div className="form-group col-md-6">
                    <label htmlFor="prazo">Prazo</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="prazo" 
                        name="prazo" 
                        placeholder="Prazo" 
                        value={tarefa.prazo || ''}
                        onChange={(e) => setTarefa({ ...tarefa, prazo: e.target.value })} 
                        required
                    />
                </div>

                <div >
                    <input 
                        type="checkbox" 
                        className="btn-check" 
                        id="status" 
                        autoComplete="off"
                        name="status"
                        checked={!!tarefa.status}
                        onChange={(e) => setTarefa({ ...tarefa, status: e.target.checked })} />
                    <label className="btn btn-outline-success" htmlFor="status">
                        {tarefa.status ? 'Concluído' : 'Concluir'}
                    </label>
{/* 
                 <div className="form-group mt-4 d-flex align-items-center">
                    <span className="material-icons" style={{ marginRight: '8px' }}>
                        {tarefa.status ? 'check_box' : 'check_box_outline_blank'}
                    </span>
                    <label htmlFor="status" style={{ marginRight: '8px' }}>
                        {tarefa.status ? 'Concluído' : 'Concluir'}
                    </label>
                    <input
                        type="checkbox"
                        className="form-control"
                        id="status"
                        name="status"
                        checked={!!tarefa.status}
                        onChange={(e) => setTarefa({ ...tarefa, status: e.target.checked })}
                        style={{ display: 'none' }}
                    />
                </div> */}


                    
                </div>
                

                <div className="form-group mt-4">         
                    <button type="submit" className="mt-2"> 
                      Salvar 
                    </button>

                    <Link to={"/"}>
                        <button type="button" className="mt-4">
                            Voltar
                        </button>
                    </Link>
                </div>

            </form>
        </div>
    )
}