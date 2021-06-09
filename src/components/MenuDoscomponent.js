import { from } from "pumpify";
import React from 'react';
import { Component } from "react";
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'; 
import { Jumbotron, Container, Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from "reactstrap";



class MenuDos extends Component {

    render() {
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <Nav className="mr-auto MenuDos" navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <span>Bienes Raíces</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Explorar todas las casas
                                </DropdownItem>
                                <DropdownItem>
                                    Bienes Raíces en Lima
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Alquileres
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Edificios de alquiler
                                </DropdownItem>
                                <DropdownItem>
                                    Alquileres en Lima
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Tasas Hipotecarias
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Tasas Hipotecarias de Lima
                                </DropdownItem>
                                <DropdownItem>
                                    Tasas Hipotecarias de Arequipa
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Buscar Casas
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Lima
                                </DropdownItem>
                                <DropdownItem>
                                    Arequipa
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Navbar>
            </div>
            
        );
    }


} 

export default MenuDos;