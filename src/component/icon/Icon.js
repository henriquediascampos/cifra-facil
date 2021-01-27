import React from 'react';
import { ReactComponent as Clear } from "../../assets/clear.svg";
import { ReactComponent as Save } from "../../assets/save.svg";
import { ReactComponent as Add } from './../../assets/add.svg';



// import './ComponentName.css';

export default function Icon({ svg, color }) {

    function fn() {
        if (svg === 'add') {
            return <Add fill={color}/>;
        } else if (svg === 'save') {
            return <Save fill={color}/>;
        } else if (svg === 'clear') {
            return <Clear fill={color}/>;
        }
    }

    return (
        <>
            {fn()}
        </>
    );
}