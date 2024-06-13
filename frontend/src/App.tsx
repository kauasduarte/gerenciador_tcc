import React, { useEffect, useState } from 'react';
import { RoutesLogin } from './components/Login/RoutesLogin';
import { RoutesDashboard } from './components/Dashboard/RoutesDashboard';
import Cookies from 'js-cookie';

import './global.module.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const user_id = Cookies.get('user_id');
    const projeto_id = Cookies.get('projeto_id');
    const role = Cookies.get('role');

    // Verificar se há um role, user_id e projeto_id válidos
    const isLoggedIn = !!role && !!user_id && projeto_id !== null && projeto_id !== undefined;

    setIsLoggedIn(isLoggedIn);
  }, []);

  if (isLoggedIn === null) {
    return <div>Verificando...</div>;
  }

  return (
    <>
      {isLoggedIn ? (
        <RoutesDashboard />
      ) : (
        <RoutesLogin />
      )}
    </>
  );

}

export default App;