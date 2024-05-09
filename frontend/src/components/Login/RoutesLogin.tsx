import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LoginForm } from './LoginForm';
import { Login } from './Login';
import { LoginWelcome } from './LoginWelcome';
import { LoginCriarTCC } from './LoginCriarTCC';
import { LoginEntrarTCC } from './LoginEntrarTCC';
import { LoginPesquisarTCC } from './LoginPesquisarTCC';
import { LoginSolicitacao } from './LoginSolicitacao';
import styles from './Login.module.css'

export function RoutesLogin() {
    return(
        <>
            <div className={styles.container}>
                <span className={styles.textLogo}>TCC</span>

                <div className={styles.login}>
                    <BrowserRouter>
                        <main>
                            <Routes>
                                <Route path="/" element={<Login />} />
                                <Route path="/cadastro" element={<LoginForm />} />
                                <Route path="/bemvindo" element={<LoginWelcome />} />
                                <Route path="/criartcc" element={<LoginCriarTCC />} />
                                <Route path="/pesquisartcc" element={<LoginPesquisarTCC />} />
                                <Route path="/entrartcc" element={<LoginEntrarTCC />} />
                                <Route path="/solicitacao" element={<LoginSolicitacao />} />
                                 
                            </Routes>
                        </main>
                    </BrowserRouter>
                </div>
            </div> 
        </>
    )
}