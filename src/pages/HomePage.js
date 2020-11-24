import React from 'react';
import Hero from '../components/Hero';
import background from '../assets/Background1.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function HomePage(props) {
    return(
        <Container fluid={true}>
            <Row className="justify-content-center py-1">
                <Col md={10} sm={12}>
                    {props.title && <h1 className="display-2 font-weight-bolder">{props.title}</h1>}
                    {props.text && <h1 className="display-2 font-weight-bolder">{props.text}</h1>}
                    {props.subTitle && <h2 className="display-4 font-weight-light">{props.subTitle}</h2>}
                </Col>
            </Row>
        </Container>
    );

}

export default HomePage;