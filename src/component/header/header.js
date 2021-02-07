import React from "react";
import './header.css';
import { ReactComponent as Menu } from './../../assets/icon/dp36/menu.svg';

export default function Header({toggleMenu}) {
    return (
        <div className="flex header row">
            <div className="btn-menu pointer flex full-height" onClick={toggleMenu}>
                <Menu />
            </div>
            <div className="fullscreen"></div>
        </div>
    );
}