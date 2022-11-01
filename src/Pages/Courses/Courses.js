import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const Courses = () => {
    const [categories, setCategories] = useState([]);
    const courses = useLoaderData()

    useEffect(() => {
        fetch('https://learn-language-server-two.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <>

            <div className='flex gap-5'>
                <div className='m-10'>
                    <h3 className='text-2xl font-bold '>Categories</h3>

                    {
                        categories.map(category => <p className='p-2' key={category.id}>
                            <Link to={`/courses/${category.id}`}>{category.name}</Link>
                        </p>)
                    }

                </div>
                <>
                    <div className='grid grid-cols-3 mx-10 gap-5'>
                        {
                            courses.map(course => <div>
                                <div className="card w-full border">
                                    <figure className="px-5 pt-5">
                                        <img src={course.image_url} alt="" className="rounded-xl" />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{course.title}</h2>
                                        <p>{course.des}</p>
                                        <h4 className='text-1xl font-bold'>Price: ${course.price}</h4>
                                        <div className="card-actions">
                                            <Link to={`/course/${course.user_id}`}><button className="btn btn-primary">Get Course</button></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </>
            </div>
        </>
    );
};

export default Courses;