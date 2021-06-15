import { render } from "@testing-library/react";
import { from } from "pumpify";
import React, {Component} from "react";
import { Media } from "reactstrap";
import { Button } from 'reactstrap';
import { Alert, Jumbotron, Container  } from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'; 

class MenuUno extends Component {

    constructor(props) {
        super(props);

        this.state = {
            
        }
    }
    

    render() {
        const serv = this.props.servicios.map((in_serv) => {
            return( 
                <div key={in_serv.id} className="col-12 col-sm-4">
                    <Card id="div_dos">                  
                        <CardImg top width="75%" src={in_serv.imagen} alt={in_serv.titulo} />
                        <CardBody>
                            <CardTitle tag="h5">{in_serv.titulo}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">
                                {in_serv.subtitulo}
                            </CardSubtitle>
                            <CardText>
                                <span className="MenuUno_dos">{in_serv.descripcion}</span>
                            </CardText>
                            <div className="MenuUno_uno">
                                <Button color="primary"><a href={in_serv.link} className="boton">{in_serv.boton}</a></Button>
                            </div>
                        </CardBody>                   
                    </Card>
                </div>
            
            );

        });

        return(
            <div className="container">
                <div>
                        <Jumbotron fluid id="id_jumbotron_Menu_Uno">
                            <Container fluid>
                                <p />
                                <br />
                                <br />
                                <br />
                                <br />                         
                                <h1 className="display-3"> El cambio comienza aquí </h1>
                                <input id="id_input_jumbotron" type="search" placeholder="Hola, "></input>
                                <br />
                                <br />
                                <br />
                                <br />
                                <p />
                            </Container>
                        </Jumbotron>
                    </div>
                <div className="row">
                    <div className="col-12 text-align-center">
                        <h3 className="MenuUno_uno">Ya sea que esté comprando, vendiendo o alquilando,</h3>
                    </div>
                    <div className="col-12 text-align-center">
                        <h3 className="MenuUno_uno">podemos ayudarlo a seguir adelante.</h3>
                    </div>                  
                </div> 
                <div className="row">                    
                    {serv}                        
                </div>
            </div>           
        );

    }

}

export default MenuUno;