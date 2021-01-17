import React, { useEffect, useState } from "react";
import { render } from "@testing-library/react";
import './dialog.css';

export default function Dialog(dialog) {
    return React.Component(render(
        <DialogSimple dialog={dialog} changeState={dialog.state} />
    ));
}

function DialogSimple({ dialog, changeState }) {

    const [state, setState] = useState('closed');
    const handleRemoveClassDialog = (state) => document.getElementById(dialog.id).classList.remove(state);
    const handleAddClassDialog = (state) => document.getElementById(dialog.id).classList.add(state);

    useEffect(() => {
        if (state === changeState) {
            handleRemoveClassDialog(state);
            setState(changeState);
            handleAddClassDialog(state);
        }
    }, [changeState, state]);



    const handleClose = () => {
        const dialog_ = document.getElementById(dialog.id);
        dialog_.parentElement.remove();
    };

    function concarFunction(fn) {
        return () => {
            fn();
            handleClose();
        };
    }
    function setButton(button, index) {
        if (button) {
            if (button.afterClose) {
                button.click = concarFunction(button.click);
            }

            if (typeof button.click === "string" && (!button.click || button.click.toLowerCase() === 'ok' || button.click.toLowerCase() === 'cancelar')) {
                button.click = handleClose;
            }
        }

        return <Button key={index} button={button} />;
    }

    return (
        <div id={dialog.id} className="dialog" >
            <div className='dialog-body'>
                <div className="dialog-title">{dialog.title}</div>
                <div className="content-dialog">
                    {dialog.html}
                </div>
                <footer className="footer-dialog">
                    <div className="flex flex-end margin-default">
                        {
                            dialog.buttons ?
                                dialog.buttons.map((b, index) => setButton(b, index))
                                : (
                                    <>
                                        <button className="button-default" onClick={handleClose}>Ok</button>
                                    </>
                                )
                        }
                    </div>
                </footer>
            </div>
        </div>
    );
}

function Button({ button }) {

    return (
        <>
            <button id={button.id} name={button.name} onClick={button.click} className={button.class || 'button-default'}>{button.title || '...'}</button>
        </>
    );
}