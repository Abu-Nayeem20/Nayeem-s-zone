import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Category from '../Category/Category';
import FeatureCourses from '../FeatureCourses/FeatureCourses';
import './Home.css'

const Home = () => {
    const [courses, setCourses] = useState([]);
        // fetch data
    useEffect( () =>{
        fetch('./data.JSON')
        .then(res => res.json())
        .then( data => setCourses(data.courses));
    }, [])
    // using array slice
    const slicedArray = courses.slice(0, 4);
    // console.log(slicedArray)
    return (
        <div className='container py-5'>
            <Category></Category>
            <h2 className='py-5 fw-bold fs-2 text-dark'>Find The Right <br />
            Online Course For You</h2>
            <Row xs={4} md={2} className="g-4">
            {
               slicedArray.map( course => <FeatureCourses
                 key={course.key}
                 featureCourses={course}></FeatureCourses>) 
            }
            </Row>
            <div className='download-area'>
                <h2><span className='text-warning'>Start Learning</span> <br/> by Downloding App.</h2>
                <div>
                <button><i className="fab fa-apple"></i> Apple Store</button>
                <button><i className="fab fa-google-play"></i> Play Store</button>
                </div>
            </div>
        </div>
    );
};

export default Home;