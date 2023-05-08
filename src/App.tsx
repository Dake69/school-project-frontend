import React from 'react';
import Glossary from "./pages/glossary";
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="glossary/*" element={<Glossary />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
