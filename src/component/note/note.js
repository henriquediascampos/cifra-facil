import React, { useEffect, useState } from 'react';
import Dialog from '../dialog/dialog';
import { createUUID } from '../util/uuid';
import InputNote from "./inputNote";
import './note.css';

export default function Note({ note, handleCell }) {

    const [currentNote, setCurrentNote] = useState(note);
    const [id] = useState(createUUID());
    const [width, setWidth] = useState(null);

    useEffect(() => {
        setCurrentNote(note);
        setWidth(document.getElementById(id).getBoundingClientRect().width)
        openNoteDialog()
    }, [note]);



    const setNote = () => {
        const value = document.getElementById('note-selected').innerText;
        handleCell(currentNote, value, width);
    };

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
    };

    function setStyle() {
        if (note && note.width) {
            return {width: note.width * note.value.length}
        } 
    }

    return (
        <span id={id} className="note" onClick={openNoteDialog} style={setStyle()}>{currentNote ? currentNote.value : ''}</span>
    );


}
