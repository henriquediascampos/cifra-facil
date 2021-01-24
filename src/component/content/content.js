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
        const lines = inputText.split("\n").map(line => line ? line : " ")
        let formatLine = [];
        lines.forEach(line => {
            formatLine = [...formatLine, lineWhiteSpace(line.length), line]
        })
        return formatLine.map(e => "   " + e + "                            " );
    }

    function lineWhiteSpace(length) {
        return [...Array(length).keys()].map((i) => " ")
            .reduce((a, b) => {
                return a+b
            }, "");
    }

    return (
        <div className="content flex fullscreen column margin-default">
            <Input id="title" class="title" placeholder="Insira um título para a música" textLabel="Título" />
            <div>
                <TextInput inputChange={handleReloadOutput} />
            </div>
            <div id="container">
            </div>

            <TextOutput inputLines={send}/>
        </div>
    )
}