import React from 'react';
import {Link} from 'react-router-dom';

function Footer() {
    return (
        <div>
            <footer className="page-footer font-small blue pt-4">
            <div className="container-fluid text-center">
            <div className="row text-left">
                <div className="col-lg-3 mb-4">
                <Link to="/"><img src={ process.env.PUBLIC_URL + '/assets/NEC_logo_crop.png' } style={{width: "120px"}} alt="homepage"></img></Link>
                <div className="footer-copyright">© Jason Tsao 2020</div>
                </div>

                <div className="col-md-3 mb-4">
                <h5 className="text-uppercase">Start Here</h5>
                <div className="footer-links">
                    <ul className="list-unstyled">
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/travels">Travels</Link>
                    </li>
                    <li>
                        <Link to="/guides">Guides</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                    </ul>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <h5 className="text-uppercase">Resources</h5>
                <div className="footer-links">
                    <ul className="list-unstyled">
                    <li>
                        <a href="https://www.paypal.com/paypalme/jasontsao">Donate</a>
                    </li>
                    </ul>
                </div>
                </div>

                <div className="col-md-3 mb-4">
                <h5 className="text-uppercase">Social</h5>
                <div className="footer-links">
                    <ul className="list-unstyled">
                    <li>
                        <a href="https://www.linkedin.com/company/neverendingcycle/">LinkedIn</a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/_neverendingcycle/">Instagram</a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/neverendingcycleorg">Facebook</a>
                    </li>
                    <li>
                        <a href="https://www.neverendingcycle.org/">Website</a>
                    </li>
                    </ul>
                </div>
                </div>

            </div>
            </div>
            </footer>
        </div>
    );
}

export default Footer;