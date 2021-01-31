import React, { useEffect, useState } from "react";
import ButtonPadrao from "../buttonPadrao/buttonPadrao";
import Input from "../input/Input";
import TextInput from "../text-input/text.input";
import TextOutput from "../text-output/text.output";
import './content.css';

export default function Content() {
    const [inputText, setInputText] = useState('');
    const [objectLine, setObjectLine] = useState('');

    function handleReloadOutput(input_) {
        setInputText(input_);
    }

    useEffect(() => {
        const lines = inputText.split("\n").map(line => line ? line : " ");
        const lineFormat = formatedLine(lines);
        setObjectLine(lineFormat);
    }, [inputText]);

    return (
        <div className="content flex fullscreen column margin-default">
            <Input id="title" class="title" placeholder="Insira um título para a música" textLabel="Título" />
            <div>
                <TextInput inputChange={handleReloadOutput} />
            </div>
            <div id="container">
            </div>

            <TextOutput inputLines={objectLine} />
            <div className="flex row flex-ed">
                <ButtonPadrao icon="add" onclick={() => { }} text='salvar'></ButtonPadrao>
            </div>
        </div>
    );
}

function formatedLine(lines) {
    let lineFormat = [];
    lines.forEach(line => {
        lineFormat = [...lineFormat, lineWhiteSpace(line.length), line];
    });

    return lineFormat
        .map((line, index) => {
            const isNote = (index % 2) === 0;
            return {
                line: formatedCells(line.split('')),
                index,
                type: isNote ? 'note' : 'cell'
            };
        });

}

function formatedCells(cells) {
    return cells.map((value, index) => {
        return {
            value,
            index
        };
    });
}

function lineWhiteSpace(length) {
    return [...Array(length).keys()]
        .map((i) => "-")
        .reduce((a, b) => {
            return a + b;
        });
}