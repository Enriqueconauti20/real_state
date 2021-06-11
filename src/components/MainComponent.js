//Componente tipo Container
import { props } from "bluebird";
import { from } from "pumpify";
import React, { Component } from 'react';

import { serviciosJSON } from '../shared/serviciosJSON';

import MenuUno from './MenucomponentUno';
import MenuDos from './MenuDoscomponent';
import Cabezera from "./HeaderComponent";
import PieDePagina from "./FooterComponent";

import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Main_Servicios:serviciosJSON,
        };

    }

    render(){

        const HomePage = () => {

            return(
                <div>
                    <div>
                        <MenuUno servicios={this.state.Main_Servicios} />
                    </div>
                    <div>
                        <MenuDos />
                    </div>
                </div>
            );

        }
        
        
        return(
        <div>
            <div>
                <Cabezera />
            </div>
            <Switch>
                <div id="id_div">
                    <Route path="/home" component={HomePage} />
                </div>
                <Redirect to="/home"/>
            </Switch>
            <div>
                <PieDePagina />
            </div>    
        </div>
        );

    }

}
export default Main; 