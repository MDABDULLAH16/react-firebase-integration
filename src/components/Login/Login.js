import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Login.css'

const auth = getAuth(app)
const Login = () => {
    const [signInwithGoogle, user] = useSignInWithGoogle(auth);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/'

    const handleGoogleSignIn = () => {
        signInwithGoogle()
            .then(() => {
                navigate(from, { replace: true });


            })
    }

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ 'margin': '20px' }}>
                <button onClick={handleGoogleSignIn}>Google Sign In</button>
            </div>
            <form >
                <input type="text" name="" placeholder='Enter your Email' /><br />
                <input type="password" name="" placeholder='Enter your password' /> <br />
                <button className='button' type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;