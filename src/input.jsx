import React from "react";

const Input = ({ placeholder, value, onChange }) => {
    return <input placeholder={placeholder} onChange={onChange} value={value} />
}

export default Input;