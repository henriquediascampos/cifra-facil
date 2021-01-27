import React, { useState } from 'react';
import Dialog from '../dialog/dialog';
import { createUUID } from '../util/uuid';
import './note.css';
import InputNote from "./inputNote";

export default function Note({ note }) {
    const [note_, setCell] = useState(note);
    const [id] = useState(createUUID());

    const setNote = () => {
        const n = document.getElementById('note-selected').innerText;
        setCell(n);
    };


    function openNoteDialog(e) {
        Dialog({
            id: "dialog-set-note",
            status: "opened",
            title: "Nota",
            html: (<InputNote n={note_} />),
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


}

