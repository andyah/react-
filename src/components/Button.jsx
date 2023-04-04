import React from 'react';

const Button = ({ text = "Click me", onClick = () => alert("Default")  }) => {
    return (
        <button onClick={ onClick } >{ text }</button>
    );
};

export default Button;