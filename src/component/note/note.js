import React, { useState } from 'react';
import Dialog from '../dialog/dialog';
import { createUUID } from '../util/uuid';
import InputNote from "./inputNote";
import './note.css';

export default function Note({ note, handleCell }) {

    const [currentNote, setCurrentNote] = useState(note);
    // const context = useContext(line);
    // console.log(context);

    const setNote = () => {
        const value = document.getElementById('note-selected').innerText;
        handleCell(currentNote, value)
    }

    //     const elemneteNote = document.getElementById(id);

    //     if (currentNote !== n) {
    //         if (currentNote.length < n.length) {
    //             removeElementesSpace(n, currentNote, elemneteNote);
    //         } else if (currentNote.length > n.length) {
    //             addElementesSpace(n, currentNote, elemneteNote, openNoteDialog);
    //         }
    //         setCurrentNote(n);
    //     } else if (currentNote > n) {
    //         addElementesSpace(n, currentNote, elemneteNote);
    //         setCurrentNote(n || ' ');
    //     }
    // };


    const  openNoteDialog = ()=> {
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

function removeElementesSpace(n, note, elemneteNote) {
    let removeNote = [];
    [...new Array((n.length - note.length))]
        .forEach((element, i) => {
            const nextElement = elemneteNote.nextElementSibling;

            if (!nextElement.innerHTML || !nextElement.innerHTML.trim()) {
                removeNote = [...removeNote, nextElement];
                console.log("remove: ", nextElement);
                nextElement.remove();
            }
        });
    return removeNote;
}

function addElementesSpace(n, note, elemneteNote, openNoteDialog) {
    [...new Array((note.length - n.length))]
        .forEach((element, i) => {
            const nextElement = elemneteNote.nextElementSibling;
            const newNote = createElementeNote(openNoteDialog);
            elemneteNote.insertAdjacentElement('afterend', newNote);
            console.log("add teste: ", nextElement);
        });
}

function createElementeNote(openNoteDialog) {
    const note = document.createElement('span');
    note.id = createUUID();
    note.classList.add('note');
    note.innerHTML = ' ';
    note.addEventListener('click', openNoteDialog)
}