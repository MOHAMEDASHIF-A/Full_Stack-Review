import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Add from './add';
import Delete from './delete';
import Showdata from './get';
import Home from './home';

import Menu from './menu';
import Update from './update';

function Linking(){
    return(
        <div>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Menu" element={<Menu/>}/>
                <Route path="/Update" element={<Update/>}/>
                <Route path="/Add" element={<Add/>}/>
                <Route path="/Delete" element={<Delete/>}/>
                <Route path="/show" element={<Showdata/>}/>
            </Routes>
        </BrowserRouter>
            
        </div>
    )
}
export default Linking;