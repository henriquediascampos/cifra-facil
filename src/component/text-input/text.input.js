import React, { useEffect, useState } from 'react';
import './text-input.css';



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

export default function TextInput({ inputChange }) {

    const [input, setInput] = useState(hino);

    function handleReloadOutput(value) {
        setInput(value);
    }

    useEffect(() => {
        inputChange(input);
    }, [input]);

    return (
        <div className="text-input flex column fullscreen">
            <label className="bold">Letra da música</label>
            <div className="textarea full-height">
                <textarea id="textInput" onChange={e => handleReloadOutput(e.target.value)} value={input} placeholder="Cole aqui a letra da música"></textarea>
            </div>
        </div>
    );
}
