import React from 'react';
import { Col, Form, Row, Button, FloatingLabel } from 'react-bootstrap';

const Contact = () => {
    return (
        <div className='container'>
            <h2 className='pt-5 fw-bold fs-2 text-dark'>Get In touch</h2>
            <p>Have a question or just want to say hi? We'd love to hear from you.</p>

            <Form className='text-start py-5'>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Subject</Form.Label>
              <Form.Control placeholder="Write your subject" />
            </Form.Group>

            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: '200px' }}
              />
            </FloatingLabel>

            <Form.Group className="my-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="I agree with Terms and Conditions" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
    );
};

export default Contact;