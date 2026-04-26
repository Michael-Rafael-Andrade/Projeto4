import './App.css';
import './styles/Contact.css';
import './styles/About.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About.js";
import Menu from "./pages/Menu/Menu.js";
import Shop from "./pages/Shop/Shop.js";
import Blog from "./pages/Blog/Blog.js";
import Contact from "./pages/Contact/Contact.js";

function App() {
  return (
    
    <BrowserRouter basename="/Projeto4"> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
