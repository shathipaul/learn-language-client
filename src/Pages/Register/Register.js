import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                navigate('/');
            })
            .catch(error => {
                console.error(error);
                setError(error.message);
            })
    }
    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
        .then(() => {})
        .catch(error => console.error(error))
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                        <p className="py-6">Please register to get the course.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit}>
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo url</span>
                                    </label>
                                    <input type="text" name='photoURL' placeholder="photoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <p><small>Already have an account? <Link to='/login'>Login</Link></small></p>
                                    </label>
                                </div>
                                <div className="form-control text-red-600">
                                    <p>{error}</p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Login</button>
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;