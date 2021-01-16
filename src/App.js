import React from 'react';
import './App.css';

import Header from './component/header/header';
import Content from './component/content/content';

export default function App() {
    return (
        <div className="flex column fullscreen">
            <Header />
            <Content />
        </div>
    );
}