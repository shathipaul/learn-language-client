import React from 'react';
import img from '../../Assets/images/error.jpg'

const ErrorPage = () => {
    return (
        <div>
           <img className='w-full mx-auto' src={img} alt="" />
        </div>
    );
};

export default ErrorPage;