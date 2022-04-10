import React from 'react';
import useFirebse from '../../hooks/useFirebase';

const Registers = () => {
    const { signInWithGoogle } = useFirebse();
    return (
        <div>
            <h3>Please Registers</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInWithGoogle}>Google sign In</button>
            </div>
            <form >
                <input type="text" name="" placeholder='Enter your Name' /><br />
                <input type="email" name="" placeholder='Enter your Email' /><br />
                <input type="password" name="" placeholder='Enter your password' /> <br />
                <button className='button' type="submit">Register</button>
            </form>
        </div>
    );
};

export default Registers;