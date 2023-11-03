import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import MyImageList from "./components/MyImageList";
import Videos from "./components/Videos";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
