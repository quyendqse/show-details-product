import React from "react";
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import Products from './components/Products';


function App() {
  return (
    <div>
      <Router> 
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
    </Router>
  </div>
  );
}

export default App;
