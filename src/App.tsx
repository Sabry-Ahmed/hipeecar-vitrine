import React from 'react';

import Origines from './page'
import Vendeur from './Vendeur/Vendeur'
import Agents from './Agents'
import Fonctionnement from './Fonctinemment'
import MainOrigines from './MainPage'
import LegalActions from './LegalActions'


import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainOrigines />} />
        <Route path="/LegalActions" element={<LegalActions />} />
        <Route path="/Guide" element={<Fonctionnement />} />
        <Route path="/Vendeur" element={<Vendeur />} />
        <Route path="/Agents" element={<Agents />} />
        <Route path="/Origines" element={<Origines />} />

      </Routes>
    </Router>
  );
};

export default App;