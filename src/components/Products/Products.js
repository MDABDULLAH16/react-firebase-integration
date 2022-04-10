import React from 'react';
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import app from '../../firebase.init'

const auth = getAuth(app)
const Products = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <h2>knock! Knock! who is there?</h2>
            <h5> User:{user ? user?.displayName : "NO BODY HARE!"}</h5>
        </div>
    );
};

export default Products;