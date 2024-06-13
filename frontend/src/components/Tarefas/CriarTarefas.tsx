import { Link } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";
import { FormEvent } from '../types';
import styles from '../Dashboard/Dashboard.module.css';
import Cookies from 'js-cookie';

interface Tarefa {
  titulo?: string;
  descricao?: string;
  documento?: File | null;
  documento_nome?: string | null;
  prazo?: string;
  projeto_id?: string;
}

export function CreateTarefa() {
    const [tarefa, setTarefa] = useState<Tarefa>({ documento: null, documento_nome: null });
    const [, setStatus] = useState<string>('');   
    
    const projeto_id = Cookies.get('projeto_id');
    
    async function gravar(e: FormEvent) {
      e.preventDefault();
  
      const formData = new FormData();
      formData.append('titulo', tarefa.titulo || '');
      formData.append('descricao', tarefa.descricao || '');
      formData.append('documento', tarefa.documento || '');
      formData.append('documento_nome', tarefa.documento_nome || '');
      formData.append('prazo', tarefa.prazo || '');
      formData.append('projeto_id', projeto_id || '');
  
      try {
        await axios.post(
          'http://127.0.0.1:8000/api/tarefa/create',
          formData
        );
  
        setStatus('Tarefa cadastrada com sucesso!');
        alert('Tarefa cadastrada com sucesso!');
        setTarefa({});
      } catch (error) {
        setStatus(`Falha: ${error}`);
        alert(`Falha: ${error}`);
        console.log(error);
      }
    } 

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        setTarefa({
          ...tarefa,
          documento: file,
          documento_nome: file.name
        });
      }
    };

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
                      onChange={handleChange} 
                    />
                </div>
                
                <div className="form-group col-md-6 mt-4">
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
