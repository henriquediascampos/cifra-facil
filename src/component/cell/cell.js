import React, { useState } from 'react';
import { createUUID } from '../util/uuid';
import './cell.css';


export default function Cell({ cell }) {
    const [cell_] = useState(cell);
    const [id] = useState(createUUID());

    return (
        <span id={id} className="cell" >{cell_ ? cell_ : ''}</span>
    )

}


