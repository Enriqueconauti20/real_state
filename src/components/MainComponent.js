//Componente tipo Container
//REDUX cuarto componente
//REDUX añadimos withRouter y connect
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";


import { props } from "bluebird";
import { from } from "pumpify";
import React, { Component } from 'react';

import MenuUno from './MenuUnocomponent';
import MenuDos from './MenuDoscomponent';
import Cabezera from "./HeaderComponent";
import PieDePagina from "./FooterComponent";
import Nosotros from "./NosotrosComponent";
import Inversionistas from "./InversionistasComponent";

import {Switch, Route, Redirect} from 'react-router-dom';

//REDUX necesito conectar este componente a mi Redux Store 
const mapStateToProps=(state)=>{
    return {
        Main_Servicios: state.Redux_Servicios,
    }
}
//REDUX ahora vamos al final de este archivo para conectarnos con la Store REDUX

class Main extends Component {

    constructor(props) {
        super(props);

    //al ser Arquitectura REDUX llevo todos los objetos JSON a reducer.js
        this.state = {
        };

    }

    render(){

        const HomePage = () => {

            return(
                <div>
                    <div>
                        <MenuUno servicios={this.props.Main_Servicios} />
                    </div>
                    <div>
                        <MenuDos />
                    </div>
                </div>
            );

        }

        const NosotrosPage = () =>{
            return(
                <div>
                    <Nosotros />
                </div>
            );
            
        }

        const InversionistasPage=()=>{
            return(
                <div>
                    <Inversionistas />
                </div>
            );
        }
        
        
        return(
        <div>
            <div>
                <Cabezera />
            </div>
            <Switch>
                <Route path="/home" component={HomePage} />
                <Route path="/nosotros" component={NosotrosPage} />
                <Route path="/inversionistas" component={InversionistasPage} />
                <Redirect to="/home"/>
            </Switch>
            <div>
                <PieDePagina />
            </div>    
        </div>
        );

    }

}
//REDUX ahora tenemos que conectar este componente a la Store de REDUX
//para ello rodeamos el Main con connect y mapStateToProps
//así es como terminará conectando su componente al enrutador React
export default withRouter(connect(mapStateToProps)(Main)); 

//ahora tenemos que cambiar la forma como usamos los objetos de Servicios
// ya que los eliminamos del this.state y los movimos al reducer.js
//por lo tanto ya no usaremos como states (this.states) sino como props xq vienen
// de la funcion creada en el archivo reducer.js entonces usamos this.props

