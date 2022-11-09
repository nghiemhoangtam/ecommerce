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
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Wishlist from './pages/Wishlist';


export const UserContext = createContext();


function App() {
  
  const [user,setUser]=useState(localStorage.getItem("user"));
  const [listCategories,setListCategories]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
        .then((response)=>{
            setListCategories(response.data);
        })
        .catch((response)=>{
            console.log(response);
        })
        return () => {       
        };
    },[]);
  
  return (
    <div className="App">
      <UserContext.Provider value={[user,setUser]}>
        <Header />
        <HeaderNav listCategories={listCategories}/>
        <div style={{minHeight:"600px"}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/account" element={<LoginPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/news" element={<News />} />
            <Route path="/career" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product" element={<Product />} />
            <Route path="/wishlist" element={<Wishlist/>} />
            <Route path="/logout" element={<Logout />} />
            
            {listCategories.map((category)=> {
              return <Route key={category.id} path={category.url} element={<Product categoryId={category.id} />}></Route>
            })}
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </div>
  );
}

export default App;
