import React from 'react';

function About() {
    return (
        <div className="container">

            <div className="row">

                <div className="col-lg-6">
                    <img style={{ marginBottom: "30px", width:"100%" }} id="jt" src={ process.env.PUBLIC_URL + '/assets/jason.jpg' } alt="Jason Tsao MUN Graduation"></img>
                </div>

                <div className="col-lg-6">
                    <h1 className="title">Hello readers! I'm Jason.</h1>

                    <p style={{ marginTop: "40px" }} className="main_text">
                        I was born and raised in SoCal and graduated from the University of California, Santa Barbara, with a B.A. double major in Economics/Mathematics & Statistics. I currently work for Accenture in San Francisco under their technology consulting practice. I'm new to the Bay Area, so I welcome any recommendations!
                        <br/>
                        <br/>
                        When I was little, my interests included playing with toy cars, being an expert in Mario Kart, an avid Pokemon game player, and reading lots and lots of books. Some of that hasn't changed in the present day!
                        <br/>
                        <br/>
                        Today, my passions include traveling (obviously), writing this blog (also a given), swimming endless laps at the pool, photographing nature and people, watching TV shows, and reading on the beach. You may see me trying to find new restaurants or earning some money here and there to fuel my travel addiction!
                    </p>

                    <span id="icons">
                        <a className="p" href="https://www.linkedin.com/company/neverendingcycle/" title="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
                        <a className="p" href="https://www.instagram.com/_neverendingcycle/" title="Instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                        <a className="p" href="https://www.facebook.com/neverendingcycleorg" title="Facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                        <a className="p" href="https://www.neverendingcycle.org/" title="Website" target="_blank" rel="noopener noreferrer"><i className="fas fa-globe"></i></a>
                    </span>
                </div>

            </div>

        </div>

    );
}

export default About;
