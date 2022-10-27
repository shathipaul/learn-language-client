import React from 'react';
import { Link } from 'react-router-dom';

const Course = ({course}) => {

    return (
        <div>
            <div className="card w-full border">
                            <figure className="px-5 pt-5">
                              <img src={course.image_url} alt="" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                              <h2 className="card-title">{course.title}</h2>
                              <p>{course.des}</p>
                              <h4 className='text-1xl font-bold'>Price: ${course.price}</h4>
                              <div className="card-actions">
                                <Link to={`/course/${course.id}`}><button className="btn btn-primary">Get Course</button></Link>
                              </div>
                            </div>
                          </div>
        </div>
    );
};

export default Course;