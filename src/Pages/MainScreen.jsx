import '../Styles/MainScreen.css';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Home from './Home';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Contact from './Contact';
import { Element } from 'react-scroll';
import { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";

export default function MainScreen() {
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top when the page loads or reloads
    }, []);

    return (
        <div className="MainScreen">
            <NavBar />
            <Container fluid className="p-0 main-container">
                <Row className="g-0 m-0">
                    <Col xs={12}>
                        <Element id="Home" className="Home"><Home /></Element>
                    </Col>
                </Row>
                <Row className="g-0 m-0">
                    <Col xs={12}>
                        <Element id="Projects" className="Projects"><Projects /></Element>
                    </Col>
                </Row>

                <Row className="g-0 m-0">
                    <Col xs={12}>
                        <Element id="AboutMe" className="AboutMe"><AboutMe /></Element>
                    </Col>
                </Row>

                <Row className="g-0 m-0">
                    <Col xs={12}>
                        <Element id="Contact" className="Contact"><Contact /></Element>
                    </Col>
                </Row>

                <Row className="g-0 m-0">
                    <Col xs={12}>
                        <Element id="Footer" className="Footer"><Footer /></Element>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
