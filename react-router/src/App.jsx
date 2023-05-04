import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
