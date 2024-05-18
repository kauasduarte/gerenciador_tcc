import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { SideBarLeft } from '../SideBars/SideBarLeft';

import { Dashboard } from './Dashboard';
import { Membros } from '../Membros/Membros';
import { Avaliacao } from '../Avaliacao/Avaliacao';
import { Certificados } from '../Certificados/Certificados';
import styles from '../SideBars/SideBarLeft.module.css';
import { CreateTarefa } from '../Tarefas/CriarTarefas'

// import { Profile } from '../Profile/Profile';
// import { EditProfile } from '../Profile/EditProfile';
// import { ListEnquete } from '../Enquete/ListEnquete';

// import { Reunion } from '../Reunion/Reunion';
// import { CreateReunion } from '../Reunion/CreateReunion';
// import { EditReunion } from '../Reunion/EditReunion';

import React, { useState, useEffect } from 'react';
import axios from "axios";
import Cookies from 'js-cookie';
//import { Calendario } from '../Agenda/Calendario';

export function RoutesDashboard() {

    // const [nameClub, setNameClub] = useState([]);
    // const club_id = Cookies.get('club_id');

    // useEffect(() => {
    //     async function clubName() {
    //         try {
    //             const response = await axios.get(`http://localhost:8000/api/club/getClubById/${club_id}`);
    //             setNameClub(response.data[0]);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }

    //     clubName();
    // }, []);

    return(
        <>
            <BrowserRouter>
                <div className="container-fluid">
                    <div className="row">
                        
                        <div className={`col-md-2 ${styles.sideBarLeft}`}>
                            <SideBarLeft />
                        </div>
                        
                            <div className="col-md-10" style={{ maxHeight: '50%', overflowY: 'auto' }}>
                                {/* <div className="row">
                                    <div className="col-md-6 mt-4">
                                        <b>{nameClub.name}</b>
                                    </div>
                                    {/*<div className={`col-md-6 mt-4 ${styles.menu}`}>
                                        <a href="#" className="nav-link">
                                        <span className="material-symbols-outlined">notifications</span>
                                        </a>
                                    </div>}
                                </div> */}
                                {/* <hr style={{ borderTop: '2px solid gray' }} /> */}

                                    <main>
                                        <Routes>
                                            <Route path="/" element={<Dashboard />} />
                                            <Route path="/avaliacao" element={<Avaliacao />} />
                                            <Route path="/membros" element={<Membros />} />
                                            <Route path="/certificados" element={<Certificados />} />
                                            <Route path='/criartarefa' element={<CreateTarefa />} />
                                            {/* 
                                            <Route path="/enquete" element={<Enquete />} />
                                            <Route path="/listenquete" element={<ListEnquete />} />
                                            <Route path="/createenquete" element={<CreateEnquete />} />
                                            <Route path="/reunion" element={<Reunion />} />
                                            <Route path="/createreunion" element={<CreateReunion />} />
                                            <Route path="/editreunion/:id" element={<EditReunion />} />
                                            <Route path="/profile" element={<Profile />} />
                                            <Route path="/editprofile" element={<EditProfile />} />
                                            <Route path="/livros" element={<Livros />} />
                                            <Route path="/calendario" element={<Calendario />} /> */}
                                        </Routes>
                                    </main>
                                
                            </div>
            

                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}