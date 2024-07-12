import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Cotizador from "./components/Cotizador";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/cotizador" element={<Cotizador />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
