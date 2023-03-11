import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from './pages/Add';
import Edit from './pages/Edit';
import { useState } from 'react';

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState("");

  return (

    <div className="App">

      <Routes>
        <Route path='/' element={<Home showConfirmation={showConfirmation} confirmationMessage={confirmationMessage} setConfirmationMessage={setConfirmationMessage} setShowConfirmation={setShowConfirmation} />} />
        <Route path='/add' element={<Add />} />
        <Route path='/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
