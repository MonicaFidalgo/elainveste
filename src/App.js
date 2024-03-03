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
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <div>
      <Router>
        <header>
          <NavBarComponent />
        </header>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/produtos" exact element={<Products />} />
          <Route path="/livros" exact element={<Books />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/blog/:state" element={<BlogPost />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
