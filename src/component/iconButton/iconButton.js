import React from "react";
import Icon from "../icon/Icon";
import "./iconButton.css";
export default function IconButton({ icon, onclick, color, tilte }) {

    return (
        <i className="iconButton" onClick={onclick}>
            <Icon svg={icon}  color={color} tilte={tilte} />
        </i>
    )
}