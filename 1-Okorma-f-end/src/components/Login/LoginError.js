import React from 'react';

const LoginError = () => {
    return (
        <div>
            <h1>User not found</h1>
            <a href="/login">Try Again</a>
        </div>
    );
};

export default LoginError;