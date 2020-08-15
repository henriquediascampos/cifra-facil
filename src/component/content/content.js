import React, { useState } from "react";
import './content.css';
import TextInput from "../text-input/text.input";
import TextOutput from "../text-output/text.output";

export default function Content() {
    const [inputText, setInputText] = useState('')
    function handleReloadOutput(input_) {
        setInputText(input_);
    }

    function teste(params) {
        const a = inputText.split("\n");
        return a.map(a => a ? a : " ");
    }
    return (
        <div className="content flex fullscreen row">
            <TextInput inputChange={handleReloadOutput} />
            <TextOutput inputLines={teste()}/>
        </div>
    )
}