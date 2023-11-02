import NavBarr from "./components/NavBarr";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import RNavbar from "./components/RNavbar";
import Contact from "./components/Contact";
import ImageGallery from "./components/ImageGallery";
import MyImageList from "./components/MyImageList";
import ImageBlackBox from "./components/ImageBlackBox";
import Videos from "./components/Videos";
import VideoEg from "./components/VideoEg";
import SmallFooter from "./components/SmallFooter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LayoutHome from "./LayoutHome";
import Schedule from "./components/Schedule";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/images" element={<MyImageList />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </Router> 

    </div>
  );
}

export default App;
