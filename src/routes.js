import React from "react";
import {Route, Routes } from 'react-router-dom';
import Conhecimentos from './pages/Conhecimentos';
import Contato from './pages/Contato';
import Servicos from './pages/Servicos';
import Home from './pages/Home';


export default function TheRoutes(){
    return(
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Conhecimentos' element={<Conhecimentos/>} />
    <Route path='/Contato' element={<Contato/>} />
    <Route path='/Servicos' element={<Servicos/>} />
    </Routes>
    )
}