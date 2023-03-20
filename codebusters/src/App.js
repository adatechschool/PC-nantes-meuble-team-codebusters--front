import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import Cards from './components/Cards'
import Headerwhite from './components/HeaderWhite';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductForm from './pages/ProductForm';


export default function App() {
  return (
    <div className="App" style = {{backgroundColor: "#FBF4F4"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductForm />} />
        </Routes>
        <Footer />
    </div>
  );
}

