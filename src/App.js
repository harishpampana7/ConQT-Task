import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components
import Home from './components/Home';


function App() {
  return (
    <React.Fragment>
    <Routes>
        <Route path="/" element={<Home />} />
        

        </Routes>
    </React.Fragment>
  );
}

export default App;
