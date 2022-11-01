import Header from './components/Header'
import HeaderNav from './components/HeaderNav';
import Content from './components/Content'
import LoginPage from './pages/Login';
import Home from './pages/Home';
import './index.css'
import Footer from './components/Footer';
import { Routes, Route} from "react-router-dom";
import About from './pages/About';
import News from './pages/News';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderNav />
      {/* <Content props={LoginPage} /> */}
      <div style={{minHeight:"600px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<LoginPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
