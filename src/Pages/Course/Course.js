import React from 'react';

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
                                <button className="btn btn-primary">Get Course</button>
                              </div>
                            </div>
                          </div>
        </div>
    );
};

export default Course;