import React from 'react';
import useFirebse from '../../hooks/useFirebase';
import './Login.css'
const Login = () => {
    const { signInWithGoogle } = useFirebse();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ 'margin': '20px' }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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