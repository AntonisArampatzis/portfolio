import '../Styles/Contact.css'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_dh1kvyw', 'template_p8xyl86', form.current, {
                publicKey: 'YGSAOAiw1oarmNZJ8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <Container fluid id="Contact" className="Contact vh-100 d-flex justify-content-center align-items-center">
            <Row className="g-0 m-0 w-100">
                <Col xs={12} className='text-center'>
                    <h1 className='form-header'>Send me a message!</h1>
                </Col>
                <Col xs={12} md={8} lg={6} className="col-form d-flex justify-content-center">
                    <Form ref={form} onSubmit={sendEmail} className='form'>
                        <Form.Group className="mb-3" controlId="formName">
                            <Form.Label className='label'>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" name="user_name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label className='label'>Your Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="user_email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label className='label'>Your Message</Form.Label>
                            <Form.Control as="textarea" aria-label="With textarea" name="message" style={{ height: "150px", width: "100%" }} placeholder="Type your message here" />
                        </Form.Group>

                        <Button className="submit-btn" type="submit">
                            Send Email
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}