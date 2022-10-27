import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Category = () => {
    const [categories, setCategies] = useState([]);
    

    useEffect( () =>{
        fetch('http://localhost:5000/language-categories')
        .then( res => res.json())
        .then( data => setCategies(data))
    }, [])
    return (
        <div>
            {
             categories.map( category => <p className='p-2' key={category.id}>
                <Link to={`/course/${category.id}`}>{category.name}</Link>
             </p>)   
            }
        </div>
    );
};

export default Category;