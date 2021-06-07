//Componente tipo Presentacion
import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

class App extends Component {

  //definimos el estado en el constructor del componente de clase

  render(){
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
