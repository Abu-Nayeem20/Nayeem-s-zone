import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Mentor.css'

const Mentor = (props) => {
    // console.log(props.mentor)
    const {img, title, name} = props.mentor;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" className='course-thumb' src={img} />
          <Card.Body> 
            <Card.Title className='text-start fw-bold text-dark py-2'>{name}, <span className='text-danger'>{title}</span>
            </Card.Title>
            <div className='mentor-icon'>
            <div className='d-flex justify-content-center'>
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
            </div>
            </div>
          </Card.Body>
        </Card>
    </Col>
    );
};

export default Mentor;