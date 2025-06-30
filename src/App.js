import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import Activities from "./Pages/Activities";
import Sponsor from "./Pages/Sponsor";
import Register from "./Pages/Register";
import Conferance from "./Pages/Conferance";
import Conditions from "./Pages/Conditions";
import "react-toastify/dist/ReactToastify.css";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollToAnchor from "./Components/ScrollToAnchor";
import VIPForm from "./Components/VIPForm";
import Agenda from "./Pages/Agenda";
import Speacker from "./Pages/Speaker";
import Speackers from "./Components/Speackers";

function App() {
  const { i18n } = useTranslation();
  const defaultRoute = i18n.language === "ar" ? "/ar/home" : "/en/home";

  return (
    <div className="App">
      <ScrollToTop />
      <ScrollToAnchor />
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Navigate to={defaultRoute} replace />} />
        <Route path="/ar/home" element={<Home />} />
        <Route path="/en/home" element={<Home />} />
        <Route path="/:lang/About" element={<About />} />
        <Route path="/:lang/activities" element={<Activities />} />
        <Route path="/:lang/sponsores" element={<Sponsor />} />
        <Route path="/:lang/agenda" element={<Agenda />} />
        <Route path="/:lang/speacker/:id" element={<Speacker />} />
        <Route path="/:lang/speackers" element={<Speackers />} />
        <Route path="/:lang/register" element={<Register />} />
        <Route path="/:lang/conferance" element={<Conferance />} />
        <Route path="/:lang/conditions" element={<Conditions />} />
        <Route path="/:lang/vip" element={<VIPForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
