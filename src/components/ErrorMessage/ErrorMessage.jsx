import React from 'react';
import './ErrorMessage.css';
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <>
            <img src={img} alt="error" />
            <span>Something goes wrong :(</span>
        </>
    )

}
export default ErrorMessage;