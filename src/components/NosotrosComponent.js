import { from } from "pumpify";
import React, { Component } from 'react';

import {Jumbotron, Container} from 'reactstrap'

class Nosotros extends Component{

    render(){
        return(
            <div>                
                <div className="container">
                    <div>
                        <Jumbotron fluid id="id_jumbotron_Nosotros">
                            <Container fluid>
                                <p />
                                <br />
                                <br />
                                <br />
                                <br />                                         
                                <p className="display-4">Una empresa inmobiliaria con un propósito</p>
                                <p className="display-5">Nuestra misión es ayudar a todos a encontrar su lugar en el mundo</p>
                                <p className="display-5">que además sea su mejor inversión para el futuro</p>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p />
                            
                            </Container>

                        </Jumbotron>
                    </div>
                </div>
                <div className="container" id="Nosotros_menu_dos">
                    <div className="row">
                        <h3 className="titulo_uno">
                        Brati está construyendo la primera plataforma inmobiliaria moderna en Sudamerica, combinando los mejores talentos de la industria con la tecnología para hacer que la experiencia de búsqueda y venta sea inteligente y sin problemas.
                        </h3>
                    </div>
                    <div className="row">
                        <hr color="grey" size="1" width="1000px" />
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h3 className="titulo_uno"> Una intermediación de agentes inigualables </h3>
                            <p className="parrafo_uno">
                                Como empresa innovadora de bienes raíces residenciales, empoderamos a nuestros agentes para que tengan más tiempo para asesorar a sus clientes. Con la mentalidad impulsada por las soluciones de una startup y la sofisticación de una marca de lujo, Brati es el futuro de los bienes raíces.
                            </p>
                        </div>
                        <div className="col-12 col-md-6">
                            <h3 className="titulo_uno"> Una empresa de tecnología que reinventa el espacio </h3>
                            <p className="parrafo_uno">
                                Para liderar la industria se requieren las herramientas más inteligentes creadas por las mentes más brillantes en ingeniería, diseño y estrategia. A través de nuestra plataforma patentada, Brati está cambiando la forma en que los agentes y los clientes navegan por el proceso de búsqueda o venta de una casa.
                            </p>
                        </div>
                        

                    </div>
                    <div className="row">
                        

                    </div>

                </div>
                
            </div>
        );
    }
}

export default Nosotros;