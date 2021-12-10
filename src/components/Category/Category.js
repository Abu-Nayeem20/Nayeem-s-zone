import React from 'react';
import './Category.css'

const Category = () => {
    return (
        <div>
            <h2 className='py-5 fw-bold fs-2 text-dark'>Explore <br />
            Our Popular Courses</h2>
            <div className='row'>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-database"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Data Science</h3>
                        <p>Data is everything</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-palette"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Design</h3>
                        <p>Fun and Challenging</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-business-time"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Marketing</h3>
                        <p>Grow your business</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-music"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Music</h3>
                        <p>Make happy yourself</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-database"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Data Science</h3>
                        <p>Data is everything</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-palette"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Design</h3>
                        <p>Fun and Challenging</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-business-time"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Marketing</h3>
                        <p>Grow your business</p>
                    </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6'>
                    <div className='caterogy-item'>
                    <div>
                    <i className="fas fa-music"></i>
                    </div>
                    <div className='category-text'>
                        <h3>Music</h3>
                        <p>Make happy yourself</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;