import React, { Component } from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import MenuUno from './components/MenucomponentUno'
//Despues de crear el serviciosJSON
import { serviciosJSON } from './shared/serviciosJSON';

class App extends Component {

  //definimos el estado en el constructor del componente de clase

  constructor(props) {
    super(props);

    this.state = {
      App_SerVicIosJSON:serviciosJSON
    };
  }

  render(){
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">BRATI</NavbarBrand>
          </div>
        </Navbar>
        <MenuUno servicios={this.state.App_SerVicIosJSON} />
      </div>
    );
  }
}

export default App;
