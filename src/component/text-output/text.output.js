import React, {useEffect, useState} from 'react';
import Line from '../line/line';
import './text-output.css';

export default function TextOutput( { inputLines } ) {
    const [lines, setLines] = useState([])

    useEffect(() => {
        setLines(inputLines());
    }, [inputLines]);

    return (
        <div className="text-output row flex fullscreen">
            <div className="flex column output full-width">
                {
                    lines && lines.length > 0
                    ? lines.map((line, index) => {
                        return (<Line key={index}  line={line}  />)
                    })
                    : '...'
                }
            </div>
        </div>
    )
}