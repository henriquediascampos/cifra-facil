import React, { useState } from "react";
import IconButton from "../iconButton/iconButton";
import './inputNote.css';

const notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B']
const simbols = ['#', '♭', '7', '11', '5', '/', 'M', 'm', '°']


export default function InputNote({ n: note_ }) {
    const [note, setNote] = useState(note_);

    function addNote() {
        const n = document.getElementById('note').value;
        setNote(note ? note + n : n);
    }

    function addSimbol() {
        const simbol = document.getElementById('simbol').value;
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

            <div className="flex fullscreen row container margin-default">
                <div className="flex column full-width">
                    <label>Nota</label>
                    <select id='note'>
                        {notes.map((n, index) => <option key={index}>{n}</option>)}
                    </select>
                </div>
                <div className="flex flex-end">
                    <IconButton id='add-note' className='add-note dp18' icon="add" color="blue" onclick={addNote} ></IconButton>
                </div>


                <div className="flex column full-width">
                    <label>Características</label>
                    <select id='simbol'>
                        {simbols.map((note, index) => <option key={index}>{note}</option>)}
                    </select>
                </div>
                <div className="flex flex-end">
                    <IconButton id='add-simbol' className='add-simbol' icon="add" color="blue" onclick={addSimbol}></IconButton>
                </div>
            </div>
        </div>
    );
}