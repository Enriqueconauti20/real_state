import React, {Component} from 'react';
import { Jumbotron, Container, Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";

import { NavLink } from 'react-router-dom';

class Cabezera extends Component {

    constructor(props){
        super(props);

        this.toogleNav = this.toogleNav.bind(this);

        this.state={    
            isNavOpen: false
        }
    }

    toogleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <div>
                    <Navbar color="light" light expand="md">
                        <div className="container">
                            <NavbarToggler onClick={this.toogleNav} />                        
                            <NavbarBrand className="mr-auto" href="/home">
                                <img src="../../assets/images/logo_brati.jpg" alt="Brati conauti" width="100" height="100"></img>
                            </NavbarBrand>
                            <Collapse isOpen={this.state.isNavOpen} navbar >
                                <Nav className="mr-auto" navbar>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/comprar">
                                            Comprar
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/alquilar">
                                            Alquilar
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/vender">
                                            Vender
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/prestamos">
                                            Prestamos Hipotecarios
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/agentes">
                                            Buscador de Agentes
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/gestion_alquiles">
                                            Gestion de Alquileres
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/anunciar">
                                            Anunciar
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/ayuda">
                                            Ayuda
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link" to="/registrarse">
                                            Registrarse
                                        </NavLink>
                                    </NavItem>
                                    
                                </Nav>
                            </Collapse>
                        </div>    
                    </Navbar>
                </div>
                <div id="id_jumbotron">
                    <Jumbotron fluid>
                        <Container fluid>
                            <h1 className="display-3"> El cambio comienza aquí </h1>
                            <input id="id_input_jumbotron" type="search" placeholder="Hola, "></input>
                        </Container>

                    </Jumbotron>
                </div>
            </React.Fragment>
        );
    }

}

export default Cabezera;