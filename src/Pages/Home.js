import React from "react";
import Container from "../Components/Container";
import Row from "../Components/Row";
import Me from "../Assets/me.jpeg" 


function Home() {
    return (
        <div>
            <Container>
                <Row fluid="true">
                    <div className="jumbotron jumbotron-fluid text-center" style={{backgroundColor:"rgb(238, 194, 111)"}}>
                        <div className="container">
                            <h1 className="display-2" style={{fontFamily:"serif", color:"grey"}}>Francisco Camacho</h1>
                            <p className="lead display-6">Full Stack Web Developer</p>
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className="card" style={{backgroundColor:"rgb(238, 194, 111)"}}>
                        <div className="card-body">
                            <div className="col-md-12">
                                <img src={Me} style={{maxWidth: 200}} class="img-thumbnail" id="facepic" alt="headshot" />
                                <p style={{fontFamily:"serif", fontSize:"20px"}}>   My name is Francisco Camacho. I was born on July 12, 1992 in Tucson Arizona. I'm a Full stack web developer certificated at The University of Arizona in company with Trilogy Education Services. Acquainted with STEM education courses earning an associates degree on Science-Engineering based on electrical and computer. Have knowledge in circuits and digital logic design and with a fresh knowledge and promising skills on Javascript, CSS and HTML. Adapted to work with a team and with a huge desire to continue feeding and developing my creativity to impact the world wide web.
                                </p>
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Home