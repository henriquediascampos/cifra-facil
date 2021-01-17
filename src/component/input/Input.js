import React, { useState } from 'react';
import { createUUID } from '../util/uuid';

import './input.css';

export default function Input({ value, placeholder, textLabel }) {
    const [id] = useState(createUUID());

    function validateMandatory() {
        const element = document.getElementById(id);
        const value = element.value;
        const spanTextError = document.getElementById(id+"-mandatory-error");
        const spanTextLabel = document.getElementById(id+"-text-label");


        if (value) {
            spanTextLabel.classList.remove('error')
            element.classList.remove('error-border')
            spanTextError.classList.add('hidden')
            spanTextError.classList.remove('mandatory-error-animation')
        } else {
            spanTextLabel.classList.add('error')
            element.classList.add('error-border')
            spanTextError.classList.remove('hidden')
            spanTextError.classList.add('mandatory-error-animation')
        }


    }
    return (
        <div className="input flex column">
            <input id={id} className='no-select input-default' placeholder={placeholder} value={value} onBlur={validateMandatory} required title={placeholder} />
            <span id={id+"-text-label"} className="text-label">
                <label>{textLabel}</label>
            </span>
            <span id={id+"-mandatory-error"} className="error mandatory-error hidden">
                <label>Este campos é de prenchimento obrigatório</label>
            </span>
        </div>
    );
}