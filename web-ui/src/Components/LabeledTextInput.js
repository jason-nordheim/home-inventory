import React from 'react';
export const LabeledTextInput = ({ htmlFor, type="text", label, placeholder, onValueChanged }) => {
    return (
        <div>
            <label htmlFor={htmlFor}>{label}</label>
            <input type={type} htmlFor={htmlFor} placeholder={placeholder} onChange={onValueChanged} />
        </div>
    );
};
