import React, { useEffect, useState } from 'react';
import Cell from '../cell/cell';
import Note from '../note/note';
import './line.css';

// const LinesContext = createContext();

export default function Line({ line }) {
    const [lineCurrent, setLine] = useState([]);
    const [newLine, setNewLine] = useState([]);

    useEffect(() => {
        setLine(line);
    }, [line, newLine]);

    function handleCell(cell, value) {
        lineCurrent.line = lineCurrent.line.map(c => {
            if (c.index === cell.index) {
                c.value = value;
            }
            return c;
        });
        setNewLine('');
        setNewLine(lineCurrent);
    }

    console.log();
    return (
        <pre className='line'>
            {
                lineCurrent &&  lineCurrent.line
                    ? lineCurrent.line.map((cell, index) => {
                        return lineCurrent.type === 'note'
                            ? (<Note key={index} note={cell} handleCell={handleCell} />)
                            : (<Cell key={index} cell={cell} />);

                    })
                    : ""
            }
        </pre>
    );
}