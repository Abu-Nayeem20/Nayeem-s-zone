import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect( () =>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then( data => setCourses(data.courses))
    }, [])
    return (
        <div className='container'>
            <h2 className='py-5 fw-bold fs-2 text-dark'>Find The Right <br /> Online Course For You</h2>
            <Row xs={4} md={3} className="g-4 py-5">
            {
                courses.map(course => <Course 
                    key={course.key}
                    course={course}></Course>)
            }
            </Row>
        </div>
    );
};

export default Courses;