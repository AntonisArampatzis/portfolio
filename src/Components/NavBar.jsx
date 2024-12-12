import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles/NavBar.css'
import { Link } from 'react-scroll';

export default function NavBar() {
    return (
        <Navbar expand="lg" className="navbar fixed-top">
            <Container fluid >
                <Navbar.Brand className="navbar-brand-name ps-5">
                    <Link to="Home" smooth={true} duration={500}>Antonis Arampatzis</Link>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto pe-5">
                        <Link className="navBtn" to="Home" smooth={true} duration={500}>Home</Link >
                        <Link className="navBtn" to="Projects" offset={-80} smooth={true} duration={500} >Projects</Link>
                        <Link className="navBtn" to="AboutMe" offset={-80} smooth={true} duration={500} >About Me</Link >
                        <Link className="navBtn" to="Contact" offset={-80} smooth={true} duration={500} >Contact</Link >
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

//xwris kanena styling sta pages pali den douyleyei kai kanei overlap to scrollbar