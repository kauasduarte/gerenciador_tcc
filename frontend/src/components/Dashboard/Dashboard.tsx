import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import styles from "./Dashboard.module.css";
import icon from "../../assets/anexar-arquivo.png";
import axios from "axios";
import Cookies from 'js-cookie';
import { format } from 'date-fns';
import { FormEvent } from '../types';

interface Dashboard {
    id: number;
    titulo: string;
    descricao: string;
    documento: string;
    documento_nome: string;
    status: string;
    prazo: string;
    projeto_id: number;
    created_at: string;
    updated_at: string;
}

const statusMap = {
    'todo': 'A fazer',
    'doing': 'Em processo',
    'review': 'Em revisão',
    'done': 'Concluído'
};

const reverseStatusMap = {
    'A fazer': 'todo',
    'Em processo': 'doing',
    'Em revisão': 'review',
    'Concluído': 'done'
};

export function Dashboard() {
    const projeto_id = Cookies.get('projeto_id');
    const [editDashboard, setEditDashboard] = useState<Dashboard[]>([]);
    const [selectedTask, setSelectedTask] = useState<Dashboard | null>(null);
    const [, setStatus] = useState('');

    useEffect(() => {
        async function EditDashboard() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/tarefa/getAllTasksByProject/${projeto_id}`);
                setEditDashboard(response.data || []);
            } catch (error) {
                console.error(error);
            }
        }
        EditDashboard();
    }, [projeto_id]);

    // Função de gravação
    async function gravar(e: FormEvent) {
        e.preventDefault();
        if (selectedTask) {
            console.log("Tarefa selecionada antes da formatação:", selectedTask);
            
            // Formatar as datas e o status
            const formattedTask = {
                ...selectedTask,
                created_at: format(new Date(selectedTask.created_at), 'yyyy-MM-dd HH:mm:ss'),
                updated_at: format(new Date(selectedTask.updated_at), 'yyyy-MM-dd HH:mm:ss'),
                status: reverseStatusMap[selectedTask.status] || selectedTask.status // Converte para o formato do banco
            };

            console.log("Dados a serem enviados:", formattedTask);
            try {
                await axios.put(`http://127.0.0.1:8000/api/tarefa/updateTask/${formattedTask.id}`, {
                    ...formattedTask,
                });
                window.location.reload();
            } catch (erro) {
                console.error(`Erro ao atualizar tarefa: ${erro}`);
                if (erro.response) {
                    console.error('Resposta do servidor:', erro.response.data);
                }
                setStatus(`Falha: ${erro}`);
            }
        } else {
            console.error("Nenhuma tarefa selecionada para atualização.");
        }
    }

    function handleCardClick(task) {
        setSelectedTask(task);
    }

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
                        {editDashboard.map((editDashboards) => (
                            editDashboards.status === 'todo' && (
                                <div 
                                    className={` ${styles.taskCard}`} 
                                    key={editDashboards.id} 
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    onClick={() => handleCardClick(editDashboards)}
                                >
                                    <div>
                                        <p className={`${styles.taskTitle}`}>{editDashboards.titulo}</p>
                                        <span className={`${styles.tag} ${styles.yellowTag}`}>A Fazer</span>
                                    </div>
                                    <a href="">
                                        <img src={`${icon}`} alt="" className={`${styles.icon}`}/>
                                    </a>
                                </div>
                            )
                        ))}
                    </div>
                    
                    <div className={`${styles.column}`}>
                        <h3>Em processo</h3>
                        {editDashboard.map((editDashboards) => (
                            editDashboards.status === 'doing' && (
                                <div 
                                    className={`${styles.taskCard}`} 
                                    key={editDashboards.id}
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    onClick={() => handleCardClick(editDashboards)}
                                >
                                    <div>
                                        <p className={`${styles.taskTitle}`}>{editDashboards.titulo}</p>
                                        <span className={`${styles.tag} ${styles.redTag}`}>Em processo</span>
                                    </div>
                                    <a href="">
                                        <img src={`${icon}`} alt="" className={`${styles.icon}`}/>
                                    </a>
                                </div>
                            )
                        ))}
                    </div>

                    <div className={`${styles.column}`}>
                        <h3>Em revisão</h3>
                        {editDashboard.map((editDashboards) => (
                            editDashboards.status === 'review' && (
                                <div 
                                    className={`${styles.taskCard}`} 
                                    key={editDashboards.id}
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    onClick={() => handleCardClick(editDashboards)}
                                >
                                    <div>
                                        <p className={`${styles.taskTitle}`}>{editDashboards.titulo}</p>
                                        <span className={`${styles.tag} ${styles.purpleTag}`}>Em revisão</span>
                                    </div>
                                    <a href="">
                                        <img src={`${icon}`} alt="" className={`${styles.icon}`}/>
                                    </a>
                                </div>
                            )
                        ))}
                    </div>

                    <div className={`${styles.column}`}>
                        <h3>Concluído</h3>
                        {editDashboard.map((editDashboards) => (
                            editDashboards.status === 'done' && (
                                <div 
                                    className={`${styles.taskCard}`} 
                                    key={editDashboards.id}
                                    data-bs-toggle="modal" 
                                    data-bs-target="#staticBackdrop"
                                    onClick={() => handleCardClick(editDashboards)}
                                >
                                    <div>
                                        <p className={`${styles.taskTitle}`}>{editDashboards.titulo}</p>
                                        <span className={`${styles.tag} ${styles.greenTag}`}>Concluído</span>
                                    </div>
                                    <a href="">
                                        <img src={`${icon}`} alt="" className={`${styles.icon}`}/>
                                    </a>
                                </div>
                            )
                        ))}
                    </div>
                </main>

                {selectedTask && (
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h1 className="modal-title fs-5" id="staticBackdropLabel">{selectedTask.titulo}</h1>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <form onSubmit={gravar}>
                                        <div className="form-group">
                                            <label>Título</label>
                                            <input 
                                                type="text" 
                                                className="form-control" 
                                                name="titulo" 
                                                placeholder="Título" 
                                                maxLength={60} 
                                                required
                                                value={selectedTask.titulo || ''}
                                                onChange={(e) => setSelectedTask({ ...selectedTask, titulo: e.target.value })}
                                            />
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
                                                required
                                                value={selectedTask.descricao || ''}
                                                onChange={(e) => setSelectedTask({ ...selectedTask, descricao: e.target.value })}
                                            />
                                        </div>

                                        <div className="form-group mt-4">
                                            <label>Documento</label>
                                            <input 
                                                type="file" 
                                                className="form-control" 
                                                name="documento" 
                                                placeholder=""
                                                onChange={(e) => setSelectedTask({ ...selectedTask, documento: e.target.files[0], documento_nome: e.target.files[0].name })}
                                            />

                                        </div>

                                        <div className="form-group mt-4">
                                            <div className="form-floating">
                                                <select 
                                                    className="form-select" 
                                                    id="floatingSelect" 
                                                    aria-label="Floating label select example" 
                                                    required
                                                    value={selectedTask.status || ''}
                                                    onChange={(e) => setSelectedTask({ ...selectedTask, status: e.target.value })}
                                                >
                                                    {Object.entries(statusMap).map(([key, value]) => (
                                                        <option key={key} value={key}>{value}</option>
                                                    ))}
                                                </select>                                                
                                                <label>Status</label>
                                            </div>
                                        </div>
                                        
                                        <div className="form-group col-md-6 mt-4">
                                            <label htmlFor="prazo">Prazo</label>
                                            <input 
                                                type="date" 
                                                className="form-control" 
                                                id="prazo" 
                                                name="prazo" 
                                                placeholder="Prazo" 
                                                required
                                                value={selectedTask.prazo || ''}
                                                onChange={(e) => setSelectedTask({ ...selectedTask, prazo: e.target.value })}
                                            />
                                        </div>

                                        <div className="modal-footer mt-4">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Salvar</button>
                                        </div>
                                    </form>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
