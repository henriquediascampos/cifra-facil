import React, { useState } from "react";
import IconButton from "../iconButton/iconButton";
import './inputNote.css';

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const simbols = ['#', '♭', '7', '11', '5', '/', 'M', 'm', '°', '(',')']


export default function InputNote({ n: note_ }) {
    const [note, setNote] = useState('C');

    function addNote(event) {
        const n = event.currentTarget.innerText;
        setNote(note ? note + n : n)
    }

    function addSimbol(event) {
        const simbol = event.currentTarget.innerText;
        setNote(note ? note + simbol : simbol);

    }

    function limpar() {
        setNote(' ');
    }

    return (

        <div className="flex column fullscreen container margin-default">
            <div className="flex row fullscreen container">
                <div className="flex fullscreen container">
                    <label>Nota:</label>
                    <span id="note-selected">{note}</span>
                </div>

                <IconButton id='add-note' className='add-note' icon="clear" color="blue" onclick={limpar} ></IconButton>

            </div>

            <div className="flex fullscreen column container margin-default">
                <div className="flex column full-width">
                    <label>Escala:</label>
                    <div className="flex row margin-default escala">
                        {notes.map((n, index) => <i key={index} onClick={(event) => addNote(event)} >{n}</i>)}
                    </div>
                </div>

                <div className="flex column full-width">
                    <label>Características</label>
                    <div className="flex row margin-default escala">
                        {simbols.map((n, index) => <i key={index} onClick={(event) => addSimbol(event)} >{n}</i>)}
                    </div>
                </div>
            </div>
        </div>
    );
}