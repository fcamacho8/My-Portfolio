import React from "react";
import Container from "../Components/Container/index";
import Card from "../Components/Card/index";
import Col from "../Components/Col/index";
import Row from "../Components/Row/index";
import Shelter from "../Assets/she.PNG";
import Xeric from "../Assets/Capture.PNG";
import Laughy from "../Assets/LaughyTasky.PNG";
import Pass from "../Assets/pass.PNG";
import Grid from '@material-ui/core/Grid';

function Portfolio () {
    return (
        <div>
            <Container>
                <Grid container justify="center" >
                        <h3 style={{fontFamily: "serif"}}> My Portfolio</h3>
                 </Grid>
                <Row>
                    <Col size="md-6">
                        <Card title="Xeric Files" img={Xeric} description="Project" link="http://xeric.herokuapp.com/home"/>
                     
                        
                    </Col>
                    <Col size="md-6">
                        <Card title="Shelter Helper" img={Shelter} description="Project" link="https://u-of-a-project-two.herokuapp.com/"/>
                    </Col>
                </Row>
                <Row>
                    <Col size="md-6">
                        <Card title="LaughyTasky" img={Laughy} description="This application allow the user to save tasks throughout the day and when completing tasks have the choice between a Chuck Norris joke or an Inspirational quote" link="https://jpino7.github.io/TasksForLaughs/"/>
                    </Col>
                    <Col size="md-6">
                        <Card title="Password Generator" img={Pass} description="App" link="https://fcamacho8.github.io/Random-Password-Generator.github.io/"/>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Portfolio