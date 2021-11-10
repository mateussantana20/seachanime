import React from 'react';
import { BrowserRouter, Route, Routes as R } from 'react-router-dom';
import Main from './pages/Main';
import Anime from './pages/Anime';

export default function Routes () {
  return (
    <BrowserRouter>
      <R>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/anime/:anime" element={<Anime />} />
      </R>
    </BrowserRouter>
  )
}