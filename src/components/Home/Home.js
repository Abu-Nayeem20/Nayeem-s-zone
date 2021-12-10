import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Banner from '../Banner/Banner';
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
        <>
        <Banner></Banner>
        <div className='container py-5'>
            <Category></Category>
            <h2 className='py-5 fw-bold fs-2 text-dark'>Find The Right <br />
            Online Course For You</h2>
            <div className="row">
            {
               slicedArray.map( course => <FeatureCourses
                 key={course.key}
                 featureCourses={course}></FeatureCourses>) 
            }
            </div>
            <div className='download-area'>
                <div className="row">
                    <div className="col-md-6">
                <h2><span className='text-warning'>Start Learning</span> <br/> by Downloding App.</h2>
                    </div>
                    <div className="col-md-6">
                    <div>
                <button><i className="fab fa-apple"></i> Apple Store</button>
                <button><i className="fab fa-google-play"></i> Play Store</button>
                </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;