import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import app from '../../firebase.init';
import './Login.css'

const auth = getAuth(app)
const Login = () => {
    const [signInwithGoogle, user] = useSignInWithGoogle(auth);

    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ 'margin': '20px' }}>
                <button onClick={() => signInwithGoogle()}>Google Sign In</button>
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