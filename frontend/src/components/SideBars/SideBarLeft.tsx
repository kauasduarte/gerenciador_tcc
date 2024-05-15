import { Link  } from 'react-router-dom';
import styles from './SideBarLeft.module.css';

import { useState, useEffect } from 'react';
import axios from 'axios';

export function SideBarLeft() {

    return(
        <>
            <div className={`container`}>
                <nav className="navbar navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav flex-column ${styles.menu}`}>
                            <span  className={styles.logo}>TCC</span>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center' to="/">
                                    <span className="material-symbols-outlined">checklist</span>
                                    <span className='p-2'>Tarefas</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center' to="/membros">
                                    <span className="material-symbols-outlined">groups</span>
                                    <span className='p-2'>Membros</span>
                                </Link>
                            </li>
                            
                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center' to="/avaliacao">
                                    <span className="material-symbols-outlined">fact_check</span>
                                    <span className='p-2'>Avaliação</span>
                                </Link>
                            </li>

                            <li className={`nav-item ${styles.menuItem}`}>
                                <Link className='nav-link d-flex align-items-center' to="/certificados">
                                    <span className="material-symbols-outlined">license</span>
                                    <span className='p-2'>Certificados</span>
                                </Link>
                            </li>

                            {/* <li className={`nav-item d-flex ${styles.userProfile} ${styles.hoverEffect}`}>
                                <div className="dropdown">
                                    <a
                                    className="nav-link d-flex flex-row mt-4"
                                    href="#"
                                    role="button"
                                    id="userDropdown"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    >
                                        {profile.map((profiles) => (
                                            <div key={profiles.id} className="d-flex" style={{ alignItems: 'center' }}>
                                                <img
                                                src={
                                                    profiles.imagem
                                                    ? `http://127.0.0.1:8000/api/user/getImage/${user_id}`
                                                    : logo
                                                }
                                                alt="Imagem do perfil"
                                                className="img-fluid rounded-circle align-self-start"
                                                style={{ maxWidth: "70px" }}
                                                />

                                                <div className="mt-3" style={{ marginLeft: '1rem' }}>
                                                <div className="d-block">{profiles.name} {profiles.last_name}</div>
                                                <div className="d-block">{profiles.club_name}</div>
                                                </div>
                                            </div>
                                            ))}
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="/" onClick={handleLogout}>
                                            Logout
                                        </a>
                                    </div>
                                </div>
                            </li>  */}
                        </ul>
                    </div>
                </nav> 
            </div>
        </>
    )
} 