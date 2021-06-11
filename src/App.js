//Componente tipo Presentacion
import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

import { BrowserRouter } from 'react-router-dom';
 
class App extends Component {

  //definimos el estado en el constructor del componente de clase

  render(){
    return (
      <BrowserRouter>   
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
