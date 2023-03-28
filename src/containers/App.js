import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Nav from '../components/Nav.jsx';
import Home from '../components/Home.jsx';
import Menus from '../components/Menus.jsx';
import Nosotros from "../components/Nosotros"
import Paginas from '../components/Paginas';
import InfoPago from '../components/InfoPago';
import Contacto from '../components/Contacto';

function App() {
  
  return (
    <div className="app">
      <Nav/>

      <Switch >
      <Route exact path="/"> 
        <Home/>
        </Route>

      <Route path="/menus">
        <Menus/>
      </Route> 
      
      <Route path="/nosotros"> 
        <Nosotros/>
      </Route>

      <Route path="/paginas"> 
        <Paginas/>
      </Route>

      <Route path="/infopagos"> 
        <InfoPago/>
      </Route>

      <Route path="/contactar"> 
        <Contacto/>
      </Route>

      </Switch>
    </div>
  );
}

export default App;
