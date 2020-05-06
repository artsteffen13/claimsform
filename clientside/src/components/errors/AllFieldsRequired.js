import React, {useEffect} from 'react';

const AllFieldsRequired = () => {
    useEffect(() => {
        alert('All Fields Required!');
        window.location.replace('/signup');
    })

    return (
        <div>

        </div>
    );
};

export default AllFieldsRequired;
