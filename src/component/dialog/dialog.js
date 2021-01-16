import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";

export default function Dialog(changeState, title, html, htmlButtons) {
    return React.Component(render(
        <DialogSimple changeState={changeState} title_={title} html={html} htmlButtons={htmlButtons} />
    ));
}

function DialogSimple({ changeState, title_, html, htmlButtons }) {

    const [state, setState] = useState('closed')
    const handleRemoveClassDialog = (state) => document.getElementById("dialog").classList.remove(state);
    const handleAddClassDialog = (state) => document.getElementById("dialog").classList.add(state);

    useEffect(() => {
        if (state === changeState) {
            handleRemoveClassDialog(state);
            setState(changeState);
            handleAddClassDialog(state);
        }
    }, [changeState, state]);

    const handleClose = () => {
        const a = document.getElementById('dialog')
        a.parentElement.remove();
    }

    return (
        <div id="dialog" className="dialog" >
            <div className='dialog-body'>
                <div className="dialog-title">{title_}</div>
                <div className="content-dialog">
                    {html}
                </div>
                <footer className="footer-dialog">
                    {
                        htmlButtons ||
                        (
                            <div>
                                <button className="button-default" onClick={handleClose}>Ok</button>
                                <button className="button-default" onClick={handleClose}>Cancelar</button>
                            </div>
                        )
                    }
                </footer>
            </div>
        </div>
    )
}