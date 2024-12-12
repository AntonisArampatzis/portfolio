import '../Styles/Projects.css';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import Project1Card from '../Components/Project1Card';
import Project2Card from '../Components/Project2Card';
import Project3Card from '../Components/Project3Card';


export default function Projects() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
        };
        window.addEventListener('resize', handleResize);
        handleResize(); // Initialize on mount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="Projects" className="Projects vh-100">
            <Container className="inner-container text-center p-4">
                <div className="header mb-5"><span className='title'>My Projects</span></div>

                {isMobile ? (
                    <Carousel interval={null} className="w-100">
                        <Carousel.Item>
                            <Col xs={12} className="d-flex justify-content-center">
                                <Project1Card />
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col xs={12} className="d-flex justify-content-center">
                                <Project2Card />
                            </Col>
                        </Carousel.Item>
                        <Carousel.Item>
                            <Col xs={12} className="d-flex justify-content-center">
                                <Project3Card />
                            </Col>
                        </Carousel.Item>
                    </Carousel>
                ) : (
                    <Row className="g-4 justify-content-center">
                        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                            <Project1Card />
                        </Col>
                        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                            <Project2Card />
                        </Col>
                        <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
                            <Project3Card />
                        </Col>
                    </Row>
                )}
            </Container>
        </section>
    );
}
