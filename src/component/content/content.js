import React, { useState } from "react";
import Input from "../input/Input";
import TextInput from "../text-input/text.input";
import TextOutput from "../text-output/text.output";
import './content.css';

export default function Content() {
    const [inputText, setInputText] = useState('')

    function handleReloadOutput(input_) {
        setInputText(input_);
    }

    function send(params) {
        const lines = inputText.split("\n");
        return lines.map(line => line ? line : " ");
    }

    return (
        <div className="content flex fullscreen column margin-default">
            <Input id="title" class="title" placeholder="Insira um título para a música" textLabel="Título" />
            <TextInput inputChange={handleReloadOutput} />
            <TextOutput inputLines={send}/>
        </div>
    )
}