import React, { useEffect, useState } from 'react';
import Dialog from '../dialog/dialog';
import { createUUID } from '../util/uuid';



export default function Cell({ cell }) {
    const [cell_, setCell] = useState(cell);
    const [id, setUUID] = useState(createUUID());

    const setNote = () => {
        const c = { 'character': cell_.character, 'note': document.getElementById('note').value };
        setCell(c);
    }

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
        <div className="cell flex column" id={id}>
            <div className="box-text note" onClick={openNoteDialog}>
                {cell_ ? cell_.note : ''}
            </div>
            <div className="box-text flex character">
                {cell_ ? cell_.character : ''}
            </div>
        </div>);
}

function InputNote() {
    return (
        <div className="flex fullscreen container">
            <div className="flex column full-width">
                <label>Selecione uma Nota</label>
                <select id='note'>
                    <option>C</option>
                    <option>D</option>
                    <option>E</option>
                    <option>F</option>
                    <option>G</option>
                </select>
            </div>
        </div>
    );
}

