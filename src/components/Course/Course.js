import React from 'react';
import {Button, Card, Col } from 'react-bootstrap';

const Course = (props) => {
    const {img, title, category, lesson, price, description} = props.course;
    const {rate, count} = props.course.rating;
    return (
        <Col>
        <Card>
          <Card.Img variant="top" className='course-thumb' src={img} />
          <p className='category-name'>{category}</p>
          <Card.Body>
           <div className='d-flex justify-content-between'>
               <p><i className="fas fa-book book-icon"></i> Lessons: {lesson}</p>
               <p><i className="fas fa-star star-icon"></i> {rate} ({count})</p>
            </div> 
            <Card.Title className='text-start fw-bold text-dark py-2'>{title}</Card.Title>
            <p>{description}</p>
            <div className='d-flex justify-content-between align-items-center border-top pt-3'>
                <p className='fw-bold text-danger'>$ {price}</p>
                <Button variant='primary'>Details</Button>
            </div>
          </Card.Body>
        </Card>
    </Col>
    );
};

export default Course;