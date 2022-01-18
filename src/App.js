import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/HomePage/About/About";
import Features from "./Components/HomePage/Features/Features";
import Service from "./Components/HomePage/Service/Service";
import NotFound from "./Components/NotFound/NotFound";
import Footer from "./Components/Shared/Footer/Footer";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="home" element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="services" element={<Service />}></Route>
          <Route path="features" element={<Features/>}></Route>
          <Route path="support" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
      ,
    </div>
  );
}

export default App;
