import React, { useState } from 'react';
import Dialog from '../dialog/dialog';
import { createUUID } from '../util/uuid';
import InputNote from "./inputNote";
import './note.css';

export default function Note({ note, handleCell }) {

    const [currentNote, setCurrentNote] = useState(note);

    const setNote = () => {
        const value = document.getElementById('note-selected').innerText;
        handleCell(currentNote, value)
    }

    const openNoteDialog = () => {
        Dialog({
            id: "dialog-set-note",
            status: "opened",
            title: "Nota",
            html: (<InputNote n={currentNote.value} />),
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
        <span id={currentNote.index} className="note" onClick={openNoteDialog}>{currentNote ? currentNote.value : ''}</span>
    );


}
