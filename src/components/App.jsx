import { useEffect } from "react";
import { useDispatch } from "react-redux";
import css from "./App.module.css";
import CatLogoContainer from "./CatLogoContainer/CatLogoContainer.jsx";
import { Route, Routes } from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage.jsx";
import CatFactDetailsPage from "../pages/CatFactDetailsPage/CatFactDetailsPage.jsx";

function App() {
  return (
    <>
      <header className={css.header}>
        <CatLogoContainer />
      </header>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/facts/:title" element={<CatFactDetailsPage />}></Route>
      </Routes>
      <footer className={css.footer}>
        <CatLogoContainer />
      </footer>
    </>
  );
}

export default App;
