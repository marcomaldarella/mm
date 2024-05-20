import { Routes, Route, useLocation } from "react-router-dom";

import Nav from "./pages/nav/Nav";

import Home from "./pages/home/Home";
import About from "./pages/About/About";
import Info from "./pages/info/Info";
import SampleProject from "./pages/sampleProject/SampleProject";

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <>
      <Nav />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<Info />} />
        <Route path="/sample-project" element={<SampleProject />} />
      </Routes>
    </>
  );
}

export default App;
