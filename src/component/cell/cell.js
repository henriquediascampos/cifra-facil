import React, { useState } from 'react';
import { createUUID } from '../util/uuid';
import './cell.css';


export default function Cell({ cell }) {
    const [currentNote] = useState(cell);
    const [id] = useState(createUUID());

    return (
        <span id={id} className="cell" >{currentNote ? currentNote.value : ''}</span>
    )

}


