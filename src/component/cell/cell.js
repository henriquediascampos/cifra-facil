import React from 'react';
import Dialog from '../dialog/dialog';
import { render } from '@testing-library/react';

export default function Cell({ cell }) {

    function openNoteDialog(e) {
        // console.log(e.target);
        Dialog("opened","teste", (<p style={{color: "red"}}>patos</p>));
    }

    return (
        <div className="cell flex column">
            <div className="box-text flex note" onClick={openNoteDialog}>
                {cell.note}
            </div>
            <div className="box-text flex character">
                {cell.character}
            </div>
        </div>)
}