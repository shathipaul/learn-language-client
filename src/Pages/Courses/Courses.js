import React from 'react';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';
import Carosel from '../Carosel/Carosel';

const Courses = () => {
    const courses = useLoaderData();

    return (
        <>
            {/* Carosel loading */}
            
            <Carosel></Carosel>

            {/* Category Loading */}

            <div className='flex gap-5'>
                <div className='m-10'>
                    <h3 className='text-2xl font-bold '>Categories</h3>
                    <Category></Category>
                </div>
                {/* Card Loading */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-4 mx-10 mt-10'>
                    {
                        courses.map(course => <Course
                            key={course.id}
                            course={course}
                        ></Course>)
                    }
                </div>
            </div>
        </>
    );
};

export default Courses;