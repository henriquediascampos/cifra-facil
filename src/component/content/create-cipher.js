import React, { useEffect, useState } from "react";
import ButtonPadrao from "../buttonPadrao/buttonPadrao";
import Input from "../input/Input";
import TextOutput from "../text-output/text.output";
import './create-cipher.css';

const hino =
`Hosana, Hosana
Hosana, Hosana, Hosana,
Hosana, Hosana, Hosana
Ao Grande El

Yehoshua eu te amo
Yehoshua eu te adoro
Yehoshua meu Grande El

Hosana, Hosana, Hosana
Ao Grande El

O Grande Rei me libertou
Me concedeu o seu amor
Por isso eu canto
Hosanas ao Senhor`;

export default function CreateCipher() {
    const [inputText, setInputText] = useState('');
    const [objectLine, setObjectLine] = useState('');

    // function handleReloadOutput(input_) {
    //     setInputText(input_);
    // }

    useEffect(() => {
        const lines = inputText.split("\n").map(line => line ? line : " ");
        const lineFormat = formatedLine(lines);
        setObjectLine([]);
        setObjectLine(lineFormat);
    }, [inputText]);

    function setTextOutput(textOutput,) {
        setObjectLine(textOutput);
    }

    return (
        <div className="content flex fullscreen column margin-default">
            <Input id="title" class="title" placeholder="Insira um título para a música" textLabel="Título" />
            <div>
                <div className="text-input flex column fullscreen">
                    <label className="bold">Letra da música</label>
                    <div className="textarea full-height">
                        <textarea id="textInput" /*onChange={e => handleReloadOutput(e.target.value)}*/ value={inputText} placeholder="Cole aqui a letra da música"></textarea>
                    </div>
                </div>
            </div>
            <div id="container">
            </div>

            <TextOutput inputLines={objectLine} setTextOutput={setTextOutput} />
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
        .map((i) => " ")
        .reduce((a, b) => {
            return a + b;
        });
}