import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyles from './globalStyles';
import Home from "./pages/HomePages/Home";


const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Routes>
          <Route path='/*' element={<Home />} />
          
        </Routes>
      </Router>
    </>
  )
}

export default App;