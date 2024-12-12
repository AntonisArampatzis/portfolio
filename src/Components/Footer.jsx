import '../Styles/Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';

export default function Footer() {
    return (
        <Container fluid className='p-0 footer-container'>
            <Row className='row-footer g-0 m-0'>

                <Col xs={12} sm={4} md={4} className="col1 d-flex justify-content-center align-items-center py-3">
                    <div className="d-flex align-items-center">
                        <Link to="Home" smooth={true} className="btn-logo">AA.</Link>
                        <div className="sm-paragraph">© 2024 Antonis Arampatzis</div>
                    </div>
                </Col>


                <Col xs={12} sm={8} md={8} className="col2 d-flex justify-content-evenly align-items-center py-3">
                    <ul id='ul1' className="list-unstyled m-0">
                        <li><Link to="Home" smooth={true} className="footer-btns">Home</Link></li>
                        <li><Link to="Projects" smooth={true} className="footer-btns">Projects</Link></li>
                        <li><Link to="AboutMe" smooth={true} className="footer-btns">About Me</Link></li>
                    </ul>
                    <ul id='ul2' className="list-unstyled m-0">
                        <li>
                            <a href='https://www.linkedin.com/in/antonis-arampatzis/' target="_blank" rel="noopener noreferrer" className="footer-btns">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href='https://github.com/AntonisArampatzis' target="_blank" rel="noopener noreferrer" className="footer-btns">
                                GitHub
                            </a>
                        </li>
                        <li>
                            <Link to="Contact" smooth={true} className="footer-btns">Contact</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}
