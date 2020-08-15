import React from 'react';
import './App.css';

import Board from './component/board';
import Header from './component/header/header';
import Content from './component/content/content';

// export default function App() {
//     return (
//         <div className="game">
//             <div className="game-board">
//                 <Board />
//             </div>
//             <div className="game-info">
//                 <div>{/* status */}</div>
//                 <ol>{/* TODO */}</ol>
//             </div>
//         </div>
//     );
// }

export default function App() {
    return (
        <div className="flex column fullscreen">
            <Header />
            <Content />
        </div>
    );
}