import React from 'react';
import Cell from '../cell/cell';
import Note from '../note/note';
import './line.css';


export default function Line({ line }) {

    function formatLine(line_) {
        return line_.split("")
    }

    return (
        <pre className='line'>
            {
                line.split("").find(e => e !== " ")
                    ? (formatLine(line).map((c, index) => (<Cell key={index} cell={c} />)))
                    : (formatLine(line).map((n, index) => (<Note key={index} note={n} />)))
            }
        </pre>
    )
}