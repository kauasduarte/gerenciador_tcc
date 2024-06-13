import { Link, useNavigate } from 'react-router-dom';
import styles from './SideBarLeft.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import logo from '../../avatar/logo.jpg';

export function SideBarLeft() {

    const navigate = useNavigate();
    const handleLogout = () => {
        // Remova os cookies quando o usuário faz logout
        Cookies.remove('user_id');
        Cookies.remove('role');
        Cookies.remove('projeto_id');
        navigate('/');
    };

    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);

    const user_id = Cookies.get('user_id');

    useEffect(() => {
        async function Profile() {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/user/getUser/${user_id}`);
                setProfile(response.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        Profile();
    }, [user_id]);

    return (
        <>
            <div className={`container ${styles.sideBarLeft}`}>
                <nav className="navbar navbar-expand-md">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className={`navbar-nav flex-column ${styles.menu}`}>
                            <li className={`nav-item d-flex ${styles.userProfile} ${styles.hoverEffect}`}>
                                <div className="dropdown">
                                    <a
                                        className="nav-link d-flex flex-row align-items-center mt-4"
                                        href="#"
                                        role="button"
                                        id="userDropdown"
                                        data-toggle="dropdown"
                                        aria-haspopup="true"
                                        aria-expanded="false"
                                    >
                                        {profile.map((profiles) => (
                                            <div key={profiles.id} className="d-flex align-items-center">
                                                <img
                                                    src={logo}
                                                    alt="Imagem do perfil"
                                                    className="img-fluid rounded-circle"
                                                />
                                                <div className={`profileName ${styles.profileName}`}>
                                                    {profiles.name} {profiles.last_name}
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
                            </li>
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
                                <Link className='nav-link d-flex align-items-center' to="/certificados">
                                    <span className="material-symbols-outlined">license</span>
                                    <span className='p-2'>Certificados</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </>
    );
}
