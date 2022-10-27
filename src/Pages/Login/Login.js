import React from 'react';
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const [error, setError] = useState('');
    const {providerLogin, signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleLogIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, {replace: true});
            })
            .catch(error => {
              console.error(error);
            })
    }

    const handleSignIn = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            navigate(from, {replace: true});
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
        <h1 className="text-5xl font-bold">Login now!</h1>
          <div className="card  w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignIn}>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control text-red-600">
              <p>{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
                <button  onClick={handleGoogleLogIn} className="btn">Login with Google</button>
              </div>
            </div>
            </form>
          </div>
        </div>
      </div>
            );
};

            export default Login;