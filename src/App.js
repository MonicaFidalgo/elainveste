import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NavBarComponent from "./components/NavBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Books from "./pages/Books";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App gradient">
      <Router>
        <header>
          <NavBarComponent />
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/produtos" exact element={<Products />} />
          <Route path="/livros" exact element={<Books />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
