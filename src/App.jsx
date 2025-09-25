// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Coldplatestudy, WeatherApp, Whatamovie, Shooterstudy } from "./components/index";
import Home from "./pages/home.jsx";
import Footer from "./components/footer.jsx";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coldplate-study" element={<Coldplatestudy />} />
        <Route path="/weather-study" element={<WeatherApp />} />
        <Route path="/whatamovie-study" element={<Whatamovie/>} />
        <Route path="/shooter-study" element={<Shooterstudy />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
