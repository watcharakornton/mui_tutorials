import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AutoCompletePage from "./pages/AutoCompletePage";
import ButtonPage from "./pages/ButtonPage";
import ButtonGroupPage from "./pages/ButtonGroupPage";
import CheckboxPage from "./pages/CheckboxPage";

import { Box, Divider, Stack, Container } from '@mui/material';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autocomplete" element={<AutoCompletePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/button-group" element={<ButtonGroupPage />} />
        <Route path="/checkbox" element={<CheckboxPage />} />
      </Routes>
    </Router>
  )
}

export default App
