import React from 'react';
import Glossary from "./pages/glossary";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Index from "./components";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Index/>}/>
              <Route path="glossary/*" element={<Glossary />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
