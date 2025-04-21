import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./component/NavBar";
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
import SnackbarPage from "./pages/SnackbarPage";
import AccordionPage from "./pages/AccordionPage";
import CardPage from "./pages/CardPage";
import BottomNavigationPage from "./pages/BottomNavigationPage"
import BreadcrumbsPage from "./pages/BreadcrumbsPage";
import DrawerPage from "./pages/DrawerPage";
import LinksPage from "./pages/LinksPage";
import MenuPage from "./pages/MenuPage";
import PaginationPage from "./pages/PaginationPage";
import SpeedDialPage from "./pages/SpeedDialPage";
import StepperPage from "./pages/StepperPage";

import DrawerAppBar from "./pages/AppBar/DrawerAppBar";
import BottomAppBar from "./pages/AppBar/BottomAppBar";
import HideAppBar from "./pages/AppBar/HideAppBar";
import ElevateAppBar from "./pages/AppBar/ElevateAppBar";
import BackToTop from "./pages/AppBar/BackToTop";
import DashboardLayoutBasic from "./pages/AppBar/DashboardLayoutBasic";

import FixedBottomNavigation from "./pages/BottomNavigation/FixedBottomNavigation";

import PersistentDrawerLeft from "./pages/Drawer/PersistentDrawerLeft";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
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
        <Route path="/snackbar" element={<SnackbarPage />} />
        <Route path="/accordion" element={<AccordionPage />} />
        <Route path="/app-bar" element={<AppBarPage />} />
        <Route path="/card" element={<CardPage />} />
        <Route path="/bottom-navigation" element={<BottomNavigationPage />} />
        <Route path="/breadcrumbs" element={<BreadcrumbsPage />} />
        <Route path="/drawer" element={<DrawerPage />} />
        <Route path="/links" element={<LinksPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/pagination" element={<PaginationPage />} />
        <Route path="/speed-dial" element={<SpeedDialPage />} />
        <Route path="/stepper" element={<StepperPage />} />

        <Route path="/app-bar/Drawer-app-bar" element={<DrawerAppBar />} />
        <Route path="/app-bar/bottom-app-bar" element={<BottomAppBar />} />
        <Route path="/app-bar/hide-app-bar" element={<HideAppBar />} />
        <Route path="/app-bar/elevate-app-bar" element={<ElevateAppBar />} />
        <Route path="/app-bar/back-to-top" element={<BackToTop />} />
        <Route path="/app-bar/dashboard-layout-basic" element={<DashboardLayoutBasic />} />

        <Route path="/bottom-navigation/fixed-bottom-navigation" element={<FixedBottomNavigation />} />

        <Route path="/drawer/persistent-drawer-left" element={<PersistentDrawerLeft />} />

      </Routes>
    </Router>
  );
}

export default App;
