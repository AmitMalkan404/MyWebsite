import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function AboutPage(props) {

    return(
        <div>
            <Container fluid={true}>
                <Row className="justify-content-center py-1">
                    <Col md={10} sm={12}>
                        {props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1>}
                        {props.subTitle && <h2 className="display-4 font-weight-light">{props.subTitle}</h2>}
                    </Col>
                </Row>
            </Container>
            <Container fluid={true}>
                <Row className="justify-content-center">
                    <Col>
                        <img src={require('../assets/my-photo.jpg')} width="248.5" height="300"/>
                    </Col>
                    <Col md={9}>
                        <p>Hello everyone!</p>
                        <p>My name is Amit, I'm third-year computer's science student in Bar-Ilan University with experience in Node JS, SQL, React, Python, Java, C++ and C#.</p>
                        <p>I served in the IDF for 4 and a half years as a commander in a managerial position. My works in the military service was Strategic Planning, data collection and analysis in SQL approaches with Python codes. One of the projects I am most proud of is a forecasting model that
                        predicts the profit from unmanned jobs, based on Linear regression and real time data. By using this model, my unit managed to predict savings of 3 million ILS.<br/>During my service I was awarded certificate of Excellence from the Divisional Officer for Professionalism and Responsibility.</p>
                        <p>I'm also a private Math teacher for High-school students (In all units) and College students. In my classes I add unique teaching techniques that direct the student to self-learning and self-understanding at the end of the process.</p>
                        <p><b>These days I'm looking for a new challenge as a developer, I am responsible, work professionally, with high abilities for self-understanding and self-learning. Feel free to browse my projects and works and review!</b></p> 
                    </Col>
                </Row>
            </Container>
        </div>
    );

}

export default AboutPage;