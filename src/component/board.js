import React from 'react';
import Square from './squad';

export default class Board extends React.Component {
    patos(i) {
        return <Square />;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.patos(0)}
                    {this.patos(0)}
                    {this.patos(2)}
                </div>
                <div className="board-row">
                    {this.patos(3)}
                    {this.patos(4)}
                    {this.patos(5)}
                </div>
                <div className="board-row">
                    {this.patos(6)}
                    {this.patos(7)}
                    {this.patos(8)}
                </div>
            </div>
        );
    }
}