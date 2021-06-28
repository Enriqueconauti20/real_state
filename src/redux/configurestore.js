import { from } from 'pumpify';
import { createStore } from 'redux';
import { combineReducers } from 'redux';
import { fun_Pura_Reducer_obje_serviciosJSON } from './reducer_objeto_serviciosJSON'

/*vamos a crear una funcion que al menos nos permite crear la Store de Redux
luego tendremos que ir al componente app.js para hacer uso de este componente 
condiguraStore.js*/

export const ConfigureStore=()=>{
    const store = createStore(
        combineReducers({
            store_redux_objeto_Servicios: fun_Pura_Reducer_obje_serviciosJSON,
        })
    );

    return store;
}
