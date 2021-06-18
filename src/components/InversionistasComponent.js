import { from } from "pumpify";
import React, { Component } from 'react';

import { Jumbotron, Container  } from 'reactstrap'

class Inversionistas extends Component{

    render(){
        return(
            <div>                
                <div className="container">
                    <div>
                        <Jumbotron fluid id="id_jumbotron_Inversionistas">
                            <Container fluid>
                                <p />
                                <br />
                                <br />
                                <br />
                                <br />                                         
                                <p className="display-3">Relaciones con Inversionistas</p>                        
                                <br />
                                <br />
                                <br />
                                <br />
                                <p />
                            
                            </Container>

                        </Jumbotron>
                    </div>
                </div>
                <div className="container MenuUno_dos">
                    <div className="row">
                        <div className="col-12">
                            <h3>
                                Presentación Corporativa
                            </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="parrafo_uno">
                                Imaginamos un mundo donde la experiencia de vender o comprar una vivienda sea sencilla y agradable para todos. Nuestra estrategia es reemplazar el flujo de trabajo anticuado, complejo y basado en papel de la actualidad por una plataforma integral, totalmente digital y sin interrupciones que permite a los agentes inmobiliarios brindar una experiencia excepcional a todos los vendedores y compradores. Nuestra plataforma centrada en agentes está en el corazón de nuestra misión.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container MenuUno_dos">
                    <div className="row">
                        <div className="col-12">
                            <h3> Nuestra Misión </h3>
                            <p className="parrafo_uno">Darle a las personas el poder de comenzar el próximo capítulo de sus vida.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Inversionistas;