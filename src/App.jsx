import * as React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AutoCompletePage from "./pages/AutoCompletePage";
import ButtonPage from "./pages/ButtonPage";
import ButtonGroupPage from "./pages/ButtonGroupPage";
import CheckboxPage from "./pages/CheckboxPage";
import FloatingActionButtonPage from "./pages/FloatingActionButtonPage";
import RadioGroupPage from "./pages/RadioGroupPage";
import RatingPage from "./pages/RatingPage";
import SelectPage from './pages/SelectPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autocomplete" element={<AutoCompletePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/button-group" element={<ButtonGroupPage />} />
        <Route path="/checkbox" element={<CheckboxPage />} />
        <Route path="/floating-action-button" element={<FloatingActionButtonPage />} />
        <Route path="/radio-group" element={<RadioGroupPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/select" element={<SelectPage />} />
      </Routes>
    </Router>
  )
}

export default App
