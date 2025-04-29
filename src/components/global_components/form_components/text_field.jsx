import React from "react";

function TextField({label, type, id, placeholder, pattern}) {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control rounded-5 border-skyBlue" id={id} pattern={pattern} placeholder={placeholder} />
        </div>
    );
}

export default TextField;