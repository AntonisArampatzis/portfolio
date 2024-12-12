import "../Styles/FirstScreen.css";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function FirstScreen() {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/main');  // Navigate to the main content page
    };

    return (
        <div className="FirstScreen d-flex align-items-center justify-content-center ">
            <Container>
                <Row className="row">
                    <Col xs={12} md={10} className="helloContainer">
                        <h2 className="hello">Hello,</h2>
                        <div>
                            <h3 className="name">
                                I'm <span>Antonis.</span>
                            </h3>
                            <p className="developer">I'm a software developer.</p>
                        </div>
                    </Col>

                    <Col xs={12} md={2}>
                        <Button className="button-enter" size="lg" onClick={handleButtonClick}>Enter</Button>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}