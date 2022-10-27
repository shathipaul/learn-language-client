import React from 'react';
import { useLoaderData } from 'react-router-dom';



const SingleCourse = () => {

    const course = useLoaderData();
    console.log(course);

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={course.image_url} alt="" className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{course.title}</h1>
                        <p className="py-6">{course.details}</p>
                        <p className="text-2xl font-bold py-2">Price: ${course.price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleCourse;