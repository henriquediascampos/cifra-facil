import React, { useEffect, useState } from 'react';
import './text-output.css';
import Line from './../line/line';
export default function TextOutput({ inputLines, setTextOutput }) {
    const [lines, setLines] = useState([]);

    useEffect(() => {
        setLines([]);
        setLines(inputLines);
    }, [inputLines]);

    function handleLine(newLine) {
        const newInputLines = lines.map(line => {
            if (line.index === newLine.index) {
                return newLine;
            }
            return line;
        });
        setTextOutput(newInputLines);
    }

    return (
        <div className="text-output row flex fullscreen">
            <div className="flex column output full-width">
                {
                    lines && lines.length > 0
                        ? lines.map((line, index) => {
                            return (<Line key={index} line={line} setLine={handleLine} />);
                        })
                        : '...'
                }
            </div>
        </div>
    );
}