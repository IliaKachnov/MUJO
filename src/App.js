import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import ShippingBanner from "./components/shippingBanner/ShippingBanner";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ScrollToTop from "./utils/scrollToTop";
import './styles/main.css';
import About from "./pages/About";
import Ingredients from "./pages/Ingredients";
import ScrollToTopArrow from "./components/ScrollToTopArrow/ScrollToTopArrow";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { fetchAuthMe, selectIsAuth } from './redux/slices/auth';
import Cart from './pages/Cart';


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe())
  }, []);


  return (
    <div className="App">
      <Router>
        <ScrollToTopArrow />
        <ScrollToTop />
        <ShippingBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/ingredients" element={<Ingredients />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

