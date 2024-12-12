import '../Styles/Home.css'
import Typing from 'react-typing-effect';
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
    return (
        <Container fluid id="Home" className="Home vh-100 d-flex justify-content-start align-items-center">
            <Row className="g-0 m-0">
                <Col xs={12} className="welcomeWindow text-center text-md-start">
                    <h1 className="helloh1">Hello,</h1>
                    <span className="span">and welcome to my </span>
                    <Typing className="welcomeText" text={[" portfolio!"]} speed={250} eraseSpeed={50} eraseDelay={1500} typingDelay={500} />
                </Col>
            </Row>
        </Container>
    )
}