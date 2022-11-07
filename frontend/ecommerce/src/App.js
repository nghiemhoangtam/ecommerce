import Header from './components/Header'
import HeaderNav from './components/HeaderNav';
import LoginPage from './pages/Login';
import Home from './pages/Home';
import './index.css'
import Footer from './components/Footer';
import { Routes, Route} from "react-router-dom";
import About from './pages/About';
import News from './pages/News';
import Career from './pages/Career';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Logout from './pages/Logout';
import { createContext, useState } from 'react';


export const UserContext = createContext();


function App() {
  
  const [user,setUser]=useState(localStorage.getItem("user"));
  
  return (
    <div className="App">
      <UserContext.Provider value={[user,setUser]}>
        <Header />
        <HeaderNav />
        <div style={{minHeight:"600px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
