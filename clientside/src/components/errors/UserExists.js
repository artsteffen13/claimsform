import React, {useEffect} from 'react';

const UserExists = () => {
    useEffect(() => {
        alert('User already exists, please try another');
        window.location.replace('/signup');
    })

    return (
        <div>

        </div>
    );
};

export default UserExists;
