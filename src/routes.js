import React from 'react'
import { BrowserRouter, Route } from "react-router-dom";

import CreateCipher from './component/content/create-cipher'
import Indice from './component/indice/indice'

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Indice} />
            <Route path="/create" component={CreateCipher} />
        </BrowserRouter>
    )
}