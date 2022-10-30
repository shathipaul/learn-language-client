import React from 'react';
import { useLoaderData } from 'react-router-dom';



const SingleCourse = () => {

    const course = useLoaderData();
   

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                <img src={course.image_url} alt="" className="rounded-xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{course.title}</h1>
                        <p className="py-6">{course.details}</p>
                        <p><small>Course Price: $ {course.price}</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;