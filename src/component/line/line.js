import React, { useEffect } from 'react';
import Cell from '../cell/cell';

export default function Line({ line }) {

    function formatLine(line) {
        return line.split("").map(c => ({"character": c, "note": ""}))
    }

    return (
        <div className="line flex row">
            { formatLine(line).map( (c, index) => (<Cell key={index} cell={c} />))}
        </div>
    )
}