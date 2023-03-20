import "bootstrap/dist/css/bootstrap.css";
import Navbarblack from "../components/TestComponents/Navbarblack";
import ProductCard from "../components/ProductCard";

export default function ProductForm() {
  return (
    
      <div className="App" style={{ backgroundColor: "#FBF4F4" }}>
        <Navbarblack />
        <div className="Card">
          <ProductCard />
        </div>
      </div> 
  );
}
