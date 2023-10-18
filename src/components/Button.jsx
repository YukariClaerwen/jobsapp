'use client';
import React from 'react';

const Button = ({ onClick, ...props }) => {
    return (
        <button
            {...props}
            onClick={async () => {
                if (onClick) await onClick();
            }}
        />
    );
};

export default Button;