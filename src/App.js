import logo from "./logo.svg";
import "./App.css";
import TopMenu from "./components/TopMenu";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Productpages from "./components/pages/Productpages";
import Copyright from "./components/Copyright";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Footer from "./components/Footer";
function App() {
  const [userloged, setUserloged] = useState(false);
  return (
    <div className="App w-full" id="bg">
      <TopMenu userloged={userloged} setUserloged={setUserloged} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/onlineshop" element={<Home />} />
        <Route path="/products" element={<Productpages />} />
      </Routes>
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
