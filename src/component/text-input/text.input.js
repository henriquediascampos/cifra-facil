import React, { useEffect, useState } from 'react';

export default function TextInput({ inputChange }) {

    const [input, setInput] = useState('teste de escrita');
    function handleReloadOutput(a) {
        setInput(a);
    }


    useEffect(() => {
        inputChange(input);
    }, [inputChange, input])

    return (
        <div className="text-input flex column fullscreen">
            <label>Letra da música</label>
            <div className="textarea full-height">
                <textarea onChange={e => handleReloadOutput(e.target.value)} id="textInput" value={input}></textarea>
            </div>
        </div>
    )
}

// Hosana, Hosana

// Hosana, Hosana, Hosana,
// Hosana, Hosana, Hosana
// Ao Grande El

// Yehoshua eu te amo
// Yehoshua eu te adoro
// Yehoshua meu Grande El

// Hosana, Hosana, Hosana
// Ao Grande El

// O Grande Rei me libertou
// Me concedeu o seu amor
// Por isso eu canto
// Hosanas ao Senhor