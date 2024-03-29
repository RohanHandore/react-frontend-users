import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './pages/Add';
import Edit from './pages/Edit';
import { useState } from 'react';
import Footer from './components/Footer';

function App() {

  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
