import { useState, useEffect, ChangeEvent } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { FormEvent } from '../types';
import styles from './Dashboard.module.css';

export function Dashboard() {



    return (
        <>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Dashboard</h1>
              </div>
            </div>
            </div>
        </>
    )
}