import Header from "./components/Header.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
        </Routes>{" "}
      </div>
    </Router>
  );
}

export default App;
