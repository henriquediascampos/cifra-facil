import React, { useEffect, useState } from 'react';
import Cell from '../cell/cell';
import Note from '../note/note';
import './line.css';

export default function Line({ line, setLine }) {
    const [currentLine, setCurrentLine] = useState([]);

    useEffect(() => {
        setCurrentLine([]);
        setCurrentLine(line);
    }, [line]);

    function handleCell(currentNote, value, width) {
        currentNote.width = width
        const newLine = {
            index: currentLine.index,
            type: currentLine.type,
            line: ajusteLine(currentNote, value)
        };

        setLine(newLine);
    }

    function ajusteLine(currentNote, value) {
        value = value || ' ';
        let newLine = [];
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
    const valueOld = currentNote.value;

    return line.reduce((accuValue, currValue) => {
        const menor = currValue.index <= currentNote.index;
        const maior = currValue.index > currentNote.index + (value.length - valueOld.length)
        if (menor || maior) {
            if (currValue.index === currentNote.index)
                currValue.value = value;
            return [...accuValue, currValue];
        } else {
            return accuValue;
        }
    }, []).map((cell, index) => {
        cell.index = index;
        return cell;
    });
}

function addElementesSpace(currentNote, value, line) {
    return line.reduce((accuValue, currValue) => {
        if (currValue.index === currentNote.index) {
            const newNotes = listNewElement(currValue.value.length - value.length, currentNote.index);
            currValue.value = value;
            return [...accuValue, currValue, ...newNotes,];
        } else {
            return [...accuValue, currValue];
        }
    }, []).map((cell, index) => {
        cell.index = index;
        return cell;
    });
}


function listNewElement(length, initinalIndex) {
    let index = initinalIndex;
    return [...Array(length).keys()]
        .map((i) => createElementeNote(index++));
}

function createElementeNote(index) {
    return {
        value: ' ',
        index
    };
}