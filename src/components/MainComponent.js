//Componente tipo Container
import { props } from "bluebird";
import { from } from "pumpify";
import React, { Component } from 'react';
import { Jumbotron, Container, Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";

import { serviciosJSON } from '../shared/serviciosJSON';

import MenuUno from './MenucomponentUno';


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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/"><img src="../../assets/images/logo_brati.jpg" alt="Brati conauti" width="100" height="100"></img></NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">
                                Comprar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Alquilar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Vender
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Prestamos Hipotecarios
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Buscador de Agentes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Gestion de Alquileres
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Anunciar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Ayudar
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">
                                Registrarse
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                        
                </Navbar>
            </div>
            <div id="id_jumbotron">
                <Jumbotron fluid>
                    <Container fluid>
                        <h1 className="display-3"> El cambio comienza aquí </h1>
                        <input id="id_input_jumbotron" type="text" placeholder="Hola, "></input>
                    </Container>

                </Jumbotron>
            </div>
            <div>
                <MenuUno servicios={this.state.Main_Servicios}/>
            </div>
        </div>
        );

    }

}
export default Main; 