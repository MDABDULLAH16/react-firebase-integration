import React from 'react';
import { Link } from 'react-router-dom';
import useFirebse from '../../hooks/useFirebase';
import './Header.css';

const Header = () => {
    const { user, handleSignOut } = useFirebse();
    return (
        <div className='header'>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/products'>Products</Link>
                <Link to='/registers'>Registers</Link>
                <span>{user?.displayName && user.displayName}</span>

                {
                    user?.uid
                        ?
                        <button onClick={handleSignOut}>sign out </button>
                        :
                        <Link to='/login'>LogIn</Link>
                }
            </nav>
        </div>
    );
};

export default Header;