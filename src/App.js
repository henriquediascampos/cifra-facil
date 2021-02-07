import React from 'react';
import './App.css';
import Header from './component/header/header';
import Routes from "./routes";
import { ReactComponent as NoteAdd } from './assets/icon/dp36/note_add.svg';


export default function App() {
    function toggleMenu() {
        const menu = document.getElementById('menu');
        const checkMenuToggle = Array.from(menu.classList).filter(e => e == 'menu-toggle');
        if (checkMenuToggle.length > 0) {
            menu.classList.remove('menu-toggle');
        } else {
            menu.classList.add('menu-toggle');
        }

    }

    return (
        <div className="flex column fullscreen">
            <Header toggleMenu={toggleMenu} />
            <div className="flex row fullscreen">
                <div id="menu" className="menu column margin-default flex">
                    <div className="item-menu flex row">
                        <NoteAdd /> <label>Criar nova cifra</label>
                    </div>
                    <div className="item-menu flex row">
                        <NoteAdd /> <label>Índice</label>
                    </div>
                </div>
                <Routes />
            </div>

        </div>
    );
}