//Componente tipo Container
import { props } from "bluebird";
import { from } from "pumpify";
import React, { Component } from 'react';

import { serviciosJSON } from '../shared/serviciosJSON';

import MenuUno from './MenucomponentUno';
import MenuDos from './MenuDoscomponent';
import Cabezera from "./HeaderComponent";
import PieDePagina from "./FooterComponent";


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Main_Servicios:serviciosJSON,
        };

    }

    render(){
        
        return(
        <div>
            <div>
                <Cabezera />
            </div>
            <div id="id_div">
                <MenuUno servicios={this.state.Main_Servicios}/>
            </div>
            <div id="id_div">
                <MenuDos />
            </div>
            <div>
                <PieDePagina />
            </div>    
        </div>
        );

    }

}
export default Main; 