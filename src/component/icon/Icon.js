import React from 'react';
import { ReactComponent as Clear } from "../../assets/icon/dp18/clear.svg";
import { ReactComponent as Save } from "../../assets/icon/dp18/save.svg";
import { ReactComponent as Add } from './../../assets/icon/dp18/add.svg';



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