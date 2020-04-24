import React from 'react';

const Login = () => {
    return (
        <div>
            <form method="POST" action="/login/authorize">
                <label>Username</label>
                <input type="text" name="username"/>
                <label>Password</label>
                <input type="text" name="password"/>
                <input type="submit" value="log In"/>
            </form>
        </div>
    );
};

export default Login;
