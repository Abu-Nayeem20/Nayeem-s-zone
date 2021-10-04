import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Mentor from '../Mentor/Mentor';

const Mentors = () => {
    const [mentors, setMentors] = useState([]);
    //fetch data 
    useEffect( ()=>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then(data => setMentors(data.mentors))
    }, [])
    return (
        <div className='container'>
            <h2 className='pt-5 fw-bold fs-2 text-dark'>Our Most <br />Popular Teachers</h2>
            <p>You don't have to struggle alone, you've got our assistance and help.</p>
            <Row xs={4} md={3} className="g-4 py-5">
            {
                mentors.map(mentor => <Mentor 
                    key={mentor.id}
                    mentor={mentor}></Mentor>)
            }
            </Row>
        </div>
    );
};

export default Mentors;