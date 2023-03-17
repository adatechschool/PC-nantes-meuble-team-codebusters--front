import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/Footer';
import Cards from './components/Cards'
import Headerwhite from './components/HeaderWhite';


export default function App() {
  return (
    <div className="App" style = {{backgroundColor: "#FBF4F4"}}>
      <Headerwhite />
      <Cards />
      <Footer />
    </div>
  );
}

