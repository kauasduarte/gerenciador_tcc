import { useState, useEffect, ChangeEvent } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import Cookies from 'js-cookie';
import styles from './Membros.module.css';

export function Membros() {



    return (
        <>
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-between align-items-center">
              <div className={`${styles.titulo}`}>
                <h1>Membros</h1>
              </div>
              <div>
                <Link className="nav-link" to={"/membros"}>
                  <button>Gerenciar Membros</button>
                </Link>
              </div>
            </div>
            <hr style={{ borderTop: '2px solid gray', width: '100%' }} />
          </div>
        </div>

      </>
    )
}