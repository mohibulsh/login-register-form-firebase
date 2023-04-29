import React, { useContext } from 'react';
import { authContext } from '../../provider/AuthProvider';

const Home = () => {
    const user =useContext(authContext)
    return (
        <div>
            <h4>this is real name {user && <span>{user.displayName}</span> }</h4>
        </div>
    );
};

export default Home;