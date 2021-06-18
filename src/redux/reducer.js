//REDUX PRIMER ELEMENTO

import { serviciosJSON } from '../shared/serviciosJSON';

// esta es la configuración inicial de mi estado 
export const initialState = {
    
    Redux_Servicios:serviciosJSON,

}

//para crear nuestra primera funcion reductora exportaremos el reductor desde aquí 
//esta función reductora va a recibir el estado actual y luego una acción y generará
//un nuevo estado. Al ser una función pura no podemos modificar el estado 
//directamente en el reductor solo puede hacer un cambio inmutable y luego devolver
// una versión actualizada del estado de este reductor 

export const Reducer=(state=initialState, action)=>{
    return(
        state
    );
}