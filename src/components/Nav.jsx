import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav nav-tabs" >
    
      <div class="btn-group" role="group" aria-label="Basic outlined example">
        <a class="btn btn-outline-primary" aria-current="page"  href="/">Home</a>
        <a class="btn btn-outline-primary" aria-current="page"  href="/nosotros">Nosotros</a>
        <a class="btn btn-outline-primary" aria-current="page"  href="/paginas">Paginas</a>
        <a class="btn btn-outline-primary" aria-current="page"  href="/infopagos">Reservas</a>
      </div>
                    
    

      <div className='navBtn'>  
        <Link to="/contactar" >
        <button className='btn'>Contactar</button>
        </Link>
        </div>
        
    </nav>
  );
};

export default Nav;
