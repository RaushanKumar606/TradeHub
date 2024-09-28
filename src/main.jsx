import { createRoot } from 'react-dom/client';
import { Route, BrowserRouter, Routes,  } from 'react-router-dom';
import './index.css';
import HomePage from './page_component/home/HomePage';
import SupportPage from './page_component/support/SupportPage';
import ProductPage from './page_component/product/ProductPage';
import SignUp from './page_component/singUp/SingUp';
import AboutPage from './page_component/about/AboutPage';
import PrizingPage from './page_component/price/PrizingPage';
import NotFund from './page_component/NotFund';
import DesktopPage  from'./page_component/homeDesktop/DesktopPage';



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="price" element={<PrizingPage/>}/> 
      <Route path="*" element={<NotFund/>}/> 
      <Route path="Trading" element={<DesktopPage />} />
      
    </Routes>
  </BrowserRouter>
);
