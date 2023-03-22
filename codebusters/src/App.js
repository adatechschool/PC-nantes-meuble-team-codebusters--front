import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';

import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import ProductForm from './pages/ProductForm';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import User from './pages/User';

const footerStyle={
  marginTop:"auto",
}

const pageStyle={
  minHeight:"100vh", 
}
export default function App() {
  return (
    <div className="App" style = {{backgroundColor: "#FBF4F4"}}>
      <div style={pageStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </div>
        <div style={footerStyle}>
        <Footer />
        </div>
    </div>
  );
}

