import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AutoCompletePage from "./pages/AutoCompletePage";
import ButtonPage from "./pages/ButtonPage";
import ButtonGroupPage from "./pages/ButtonGroupPage";
import CheckboxPage from "./pages/CheckboxPage";
import FloatingActionButtonPage from "./pages/FloatingActionButtonPage";
import RadioGroupPage from "./pages/RadioGroupPage";
import RatingPage from "./pages/RatingPage";
import SelectPage from "./pages/SelectPage";
import SliderPage from "./pages/SliderPage";
import SwitchPage from "./pages/SwitchPage";
import TextFieldPage from "./pages/TextFieldPage";
import TransferListPage from "./pages/TransferListPage";
import ToggleButtonPage from "./pages/ToggleButtonPage";
import ImageAvatarsPage from "./pages/ImageAvatarsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/autocomplete" element={<AutoCompletePage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/button-group" element={<ButtonGroupPage />} />
        <Route path="/checkbox" element={<CheckboxPage />} />
        <Route
          path="/floating-action-button"
          element={<FloatingActionButtonPage />}
        />
        <Route path="/radio-group" element={<RadioGroupPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/select" element={<SelectPage />} />
        <Route path="/slider" element={<SliderPage />} />
        <Route path="/switch" element={<SwitchPage />} />
        <Route path="/text-field" element={<TextFieldPage />} />
        <Route path="/transfer-list" element={<TransferListPage />} />
        <Route path="/toggle-button" element={<ToggleButtonPage />} />
        <Route path="/image-avatars" element={<ImageAvatarsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
