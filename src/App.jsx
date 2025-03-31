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
import BadgePage from "./pages/BadgePage";
import ChipPage from "./pages/ChipPage";
import DividerPage from "./pages/DividerPage";
import IconsPage from "./pages/IconsPage";
import MaterialIconsPage from "./pages/MaterialIconsPage";
import ListPage from "./pages/ListPage";
import TablePage from "./pages/TablePage";
import TooltipPage from "./pages/TooltipPage"
import TypographyPage from "./pages/TypographyPage"
import AlertPage from "./pages/AlertPage";
import BackdropPage from "./pages/BackdropPage";
import AppBarPage from "./pages/AppBarPage";
import DialogPage from "./pages/DialogPage";
import ProgressPage from "./pages/ProgressPage";
import SkeletonPage from "./pages/SkeletonPage";

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
        <Route path="/badge" element={<BadgePage />} />
        <Route path="/chip" element={<ChipPage />} />
        <Route path="/divider" element={<DividerPage />} />
        <Route path="/icons" element={<IconsPage />} />
        <Route path="/material-icons" element={<MaterialIconsPage />} />
        <Route path="/list" element={<ListPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/tooltip" element={<TooltipPage />} />
        <Route path="/typography" element={<TypographyPage />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/backdrop" element={<BackdropPage />} />
        <Route path="/dialog" element={<DialogPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/skeleton" element={<SkeletonPage />} />

        <Route path="/app-bar" element={<AppBarPage />} />
      </Routes>
    </Router>
  );
}

export default App;
