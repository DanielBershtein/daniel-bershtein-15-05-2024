import { useState } from "react";
import { Header } from "./components/Header";
import "./App.css";
import HomePage from "./pages/HomePage";
import { Icon } from "react-icons-kit";
import { search } from "react-icons-kit/feather/search";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/main" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </main>
  );
}

export default App;
