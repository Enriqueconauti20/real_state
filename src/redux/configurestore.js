//REDUX SEGUNDO ELEMENTO

//esto me permite crear REDUX Store y tambien me permite importar
//el reductor y el InitialState

import { from } from 'pumpify';
import { createStore } from 'redux';
import { Reducer, initialState } from './reducer'

//vamos a crear una funcion que al menos nos permite crear la Store de Redux
//luego tendremos que ir al componente app.js para hacer uso de este componente 
//condiguraStore.js

export const ConfigureStore=()=>{
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}
