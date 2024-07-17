import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollToTopOnRouteChange from "./ScrollToTopOnRouteChange";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { About } from "./Components/About/About";
import Safe from "./Components/Safe/Safe";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTopOnRouteChange />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail-about" element={<About />} />
          <Route path="/safe" element={<Safe />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
