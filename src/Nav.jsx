import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <h1>TALLER DE NIVELACION #2 BOOTCAMP FRONT-END MAKAIA</h1>
      <nav>
        <ul>
          <li>
            <Link to="/micomponente">Mi Componente</Link>
          </li>
          <li>
            <Link to="/micontador">Mi Contador</Link>
          </li>
          <li>
            <Link to="/misproductos">Mis Productos</Link>
          </li>
          <li>
            <Link to="/miContadorConuseReducer">Mi Contador con UseReducer</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;