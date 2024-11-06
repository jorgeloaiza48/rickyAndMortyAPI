import React from 'react'
import { Routes, Route } from "react-router-dom";
import RickyIndividual from './RickyIndividual';
import { BrowserRouter } from 'react-router-dom';
import RickyList from './RickyList'

function RouterRicky() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<RickyList />}/>
                <Route exact path="/individual/:id" element={<RickyIndividual />} />
            </Routes>
        </BrowserRouter>

    )
}

export default RouterRicky