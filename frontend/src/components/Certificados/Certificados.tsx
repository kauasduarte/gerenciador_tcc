import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Certificados.module.css';

export function Certificados() {



    return (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-12 d-flex justify-content-between align-items-center">
                <div className={`${styles.titulo}`}>
                  <h1>Certificados</h1>
                </div>
                <div>
                  <Link className="nav-link" to={"/certificados"}>
                    <button>Gerar certificados</button>
                  </Link>
                </div>
              </div>
              <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
            </div>
          </div>

        </>
    )
}