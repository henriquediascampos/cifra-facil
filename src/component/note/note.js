import React, { useState } from 'react';
import Dialog from '../dialog/dialog';
import { createUUID } from '../util/uuid';
import './note.css';


export default function Note({ note }) {
    const [note_, setCell] = useState(note);
    const [id] = useState(createUUID());

    const setNote = () => {
        const c = document.getElementById('note').value ;
        setCell(c);
    };
    

    function openNoteDialog(e) {
        Dialog({
            id: "dialog-set-note",
            status: "opened",
            title: "Nota",
            html: (<InputNote cell={id} />),
            buttons: [
                {
                    click: 'ok',
                    title: 'Cancelar'
                },
                {
                    click: setNote,
                    title: 'OK',
                    afterClose: true
                },
            ]
        });
    }

    return (
        <span id={id} className="note" onClick={openNoteDialog}>{note_ ? note_ : ''}</span>
    )

        ;
}

function InputNote() {
    return (
        <div className="flex fullscreen container">
            <div className="flex column full-width">
                <label>Selecione uma Nota</label>
                <select id='note'>
                    <option>C#m</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                    <option>G</option>
                </select>
            </div>
        </div>
    );
}

