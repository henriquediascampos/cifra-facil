import React from "react";
import Icon from "../icon/Icon";

export default function IconButton({ icon, onclick, color, tilte }) {

    return <Icon svg={icon} onClick={onclick} color={color} tilte={tilte} />
}