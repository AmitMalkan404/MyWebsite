import React from 'react';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import flightmobile from '../assets/flightmobile.png';
import Arkanoid from '../assets/Arkanoid.png';
import ReactLogo from '../assets/ReactLogo.png';
import ControlApp from '../assets/ControlApp.png';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Flight Control App',
                    subTitle: 'Control your flights with WEB API app',
                    imgSrc: ControlApp,
                    link: 'https://github.com/AmitMalkan404/FlightControlWeb',
                    selected: false
                },
                {
                    id: 1,
                    title: 'Flight Mobile App',
                    subTitle: 'Flight simulator on your mobile!',
                    imgSrc: flightmobile,
                    link: 'https://github.com/AmitMalkan404/FlightMobileApp',
                    selected: false
                },
                {
                    id: 2,
                    title: 'React Website',
                    subTitle: 'My personal portfolio website',
                    imgSrc: ReactLogo,
                    link: 'https://github.com/AmitMalkan404/MyWebsite',
                    selected: false
                },
                {
                    id: 3,
                    title: 'Arkanoid',
                    subTitle: 'Classic arkanoid game implemented in Java',
                    imgSrc: Arkanoid,
                    link: 'https://github.com/AmitMalkan404/Arkanoid',
                    selected: false
                },
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Carousel;