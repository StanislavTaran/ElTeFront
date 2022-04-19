import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import { MENU_ITEMS } from "./data/constants/routes";
import MortgagePage from "./pages/MortgagePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={MENU_ITEMS.BANKS.path} element={<MainPage />} />
        <Route path={MENU_ITEMS.MORTGAGE.path} element={<MortgagePage />} />
      </Routes>
    </div>
  );
}

export default App;
