import "./Home.css";
import "bootstrap/dist/css/bootstrap.css";
import Cards from "../components/Cards";
import Headerwhite from "../components/HeaderWhite";
import Filter from "../components/Filter"


export default function Home() {
  return (
    <div className="App" style={{ backgroundColor: "#FBF4F4" }}>
      <Headerwhite />
      <Filter />
      <Cards />
    </div>
  );
}
