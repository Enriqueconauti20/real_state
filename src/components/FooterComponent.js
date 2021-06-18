import React, {Component} from 'react';

import { Link } from 'react-router-dom';

class PieDePagina extends Component{

    render(){
        return(
            <div className="footer">
                <div className="container">
                    <div className="row justify-content-center">             
                        <div className="col-4 offset-1 col-sm-2">
                            <h5>Links</h5>
                            <ul className="list-unstyled" id="ul_footer">
                                <li><Link to="/home"><span className="licolor">Home</span></Link></li>
                                <li><Link to="/nosotros"><span className="licolor">Nosotros</span></Link></li>
                                <li><Link to="/servicios"><span className="licolor">Servicios</span></Link></li>
                                <li><Link to="/ayuda"><span className="licolor">Contacto</span></Link></li>
                                <li><Link to= "/inversionistas"><span className="licolor">Inversionistas</span></Link></li>
                            </ul>
                        </div>
                        <div className="col-7 col-sm-5">
                            <h5>Nuestra Dirección</h5>
                            <address>
                            San Francisco<br />
                            Silicon Valley<br />
                            Estados Unidos<br />
                            <i className="fa fa-phone fa-lg"></i>: +51 957 787 702<br />
                            <i className="fa fa-fax fa-lg"></i>: ++51 957 787 702<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                brati@conauti.com</a>
                            </address>
                        </div>
                        <div className="col-12 col-sm-4 align-self-center">
                            <div className="text-center">
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">             
                        <div className="col-auto">
                            <p>© Copyright 2021 BRATI Herramienta Inteligente de Bienes Raíces </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
} 

export default PieDePagina;