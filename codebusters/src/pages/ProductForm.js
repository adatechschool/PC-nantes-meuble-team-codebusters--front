import 'bootstrap/dist/css/bootstrap.css';
import Navbarblack from "../components/TestComponents/Navbarblack";
import ProductCard from "../components/ProductCard";

export default function ProductForm() {
    return (
        <div className="App" style={{ backgroundColor: "#FBF4F4" }}>
        <Navbarblack />
        <ProductCard />
        <h1>Product Form PAGE</h1>
        <div className='Card'>
        </div>
    </div>
    );
  }