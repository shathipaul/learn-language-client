import React from 'react';
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import Course from '../Course/Course';

const Courses = () => {
    const courses = useLoaderData();
    
    return (
        <>
            {/* Carosel loading */}
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-slate-content">
                    <div className="max-w-md">
                        <h1 className="mb-2 text-4xl font-bold">Learn More Languages</h1>
                        <h2 className="mb-4 text-2xl font-bold">Become Multilingual</h2>
                        <p className="mb-5">Learn a language right here with hundreds of free language-learning lessons, games and activities. Join us and have some fun.</p>
                    </div>
                </div>
            </div>
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