import React from "react";

const Input = ({ placeholder, value, onChange, className }) => {
    return <input placeholder={placeholder} onChange={onChange} value={value} className={className} autoComplete="off"/>
}

export default Input;