import '../Styles/AboutMe.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function AboutMe() {
    return (
        <Container fluid id="AboutMe" className="AboutMe vh-100 d-flex flex-column justify-content-center align-items-center">
            <div className='aboutme-title'>A little bit about me</div>
            <Row className="g-0 m-0 w-100">
                <Col xs={12} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                    <div className='about'>
                        Hi! I’m Antonis, an aspiring frontend developer pursuing a Bachelor of Science in Computer Science, excited to start my journey in web development. My interest in coding began along with my academic journey in Computer Science at Democritus University of Thrace
                        (formerly known as International University of Greece) in 2017,located in Kavala, where I discovered the joy of creating websites and learning how technology shapes the world around us.
                        I’m currently building my skills in HTML, CSS, JavaScript, and React, focusing on crafting responsive, user-friendly web experiences.
                        While I may be at the start of my journey, I’m passionate about learning and constantly improving with every project I take on.
                    </div>
                </Col>
                <Col xs={12} md={6} lg={6} className="d-flex justify-content-center align-items-center">
                    <div className='about'>
                        Born in 1999, I’ve always had a curious mind and a drive to create. Whether it’s experimenting with new designs or solving coding challenges, I enjoy finding ways to turn ideas into reality.
                        When I’m not coding, I enjoy spending time with friends, immersing myself in gaming adventures, or taking relaxing walks with my two dogs.
                        I’m eager to grow, collaborate, and contribute to meaningful projects as I develop my skills further.
                    </div>
                </Col>
            </Row>
        </Container>
    );
}
