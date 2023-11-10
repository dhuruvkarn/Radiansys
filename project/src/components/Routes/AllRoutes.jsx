import React from 'react';
import { Routes, Route } from "react-router-dom"
import FormValidation from '../pages/FormValidation';
import Game from '../pages/Game/Game';


function AllRoutes() {
    return (
        <Routes>
            <Route path='/' element={<FormValidation />}></Route>
            <Route path='/game' element={<Game />}></Route>
        </Routes>
    )
}

export default AllRoutes;