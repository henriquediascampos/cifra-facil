import React, { useEffect, useState } from 'react';
import Cell from '../cell/cell';
import Note from '../note/note';
import './line.css';

export default function Line({ line }) {
    const [currentLine, setCurrentLine] = useState([]);
    const [atualise, setAtualise] = useState(0);

    useEffect(() => {
        setCurrentLine(line);
    }, [line, atualise]);

    function handleCell(cell, value) {
        const newLine = {
            index: currentLine.index,
            type: currentLine.type,
            line: ajusteLine(cell, value)
        }

        setCurrentLine(newLine);
        // setAtualise(atualise + 1);
    }

    function ajusteLine(currentNote, value) {
        value = value || '*';
        let newLine = []
        if (currentNote.value !== value) {
            if (currentNote.value.length < value.length) {
                newLine = removeElementesSpace(currentNote, value, currentLine.line);
            } else if (currentNote.value.length > value.length) {
                newLine = addElementesSpace(currentNote, value, currentLine.line);

            } else if (currentNote.value.length === value.length) {
                newLine = currentLine.line.reduce((accuValue, currValue) => {
                    if (currValue.index === currentNote.index)
                        currValue.value = value;
                    return [...accuValue, currValue];
                }, []);
            }
        }

        return newLine;
    }

    return (
        <pre className='line'>
            {
                currentLine && currentLine.line
                    ? currentLine.line.map((cell, index) => {
                        return currentLine.type === 'note'
                            ? (<Note key={index} note={cell} handleCell={handleCell} />)
                            : (<Cell key={index} cell={cell} />);

                    })
                    : ""
            }
        </pre>
    );
}


function removeElementesSpace(currentNote, value, line) {
    return line.reduce((accuValue, currValue, index) => {
        if (currValue.index <= currentNote.index || currValue.index > currentNote.index + (value.length - currValue.value.length)) {
            if (currValue.index === currentNote.index)
                currValue.value = value;
            return [...accuValue, currValue];
        } else {
            return accuValue;
        }
    }, [])
}

function addElementesSpace(currentNote, value, line) {
    return line.reduce((accuValue, currValue, index) => {
        if (currValue.index === currentNote.index) {
            currValue.value = value;
            const newNotes = listNewElement(currValue.value.length - value.length, currentNote.index)
            return [...accuValue, ...newNotes, currValue];
        } else {
            return [...accuValue, currValue];
        }
    }, []);
}


function listNewElement(length, initinalIndex) {
    let index = initinalIndex
    return [...Array(length).keys()]
        .map((i) => createElementeNote(index++));
}

function createElementeNote(index) {
    return {
        value: ' ',
        index
    }
}