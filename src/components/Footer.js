import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SocialFollow from '../components/SocialFollow';

function Footer() {

    return(
        <footer className="mt-5">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        © Amit Malkan
                    </Col>
                    <Col className="p-0" md={3} sm={12}>
                        <SocialFollow />
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;
