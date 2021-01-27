import React from 'react';
import Icon from '../icon/Icon';
import './buttonPadrao.css';

export default function ButtonPadrao({ icon, onclick, color, text }) {

    return (
        <button onClick={onclick} className="button-padrao primary">
            <label>{text}</label>
        </button>
    );
}