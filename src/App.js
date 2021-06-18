//Componente tipo Presentacion
//REDUX tercer elemento
import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

import { BrowserRouter } from 'react-router-dom';

//REDUX , importamos los componentes necesarios para crear Store
//Provider permite que Redux Store este disponible para todos los componentes
//de mi aplicación
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configurestore'; 

//REDUX ahora configuramos la Store de redux
const store_uno=ConfigureStore()
 
class App extends Component {

  //definimos el estado en el constructor del componente de clase

  render(){
    return (
      <Provider store={store_uno}>
      <BrowserRouter>   
        <div>
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
