import Panierblack from '../buttons/Panierblack';
import Searchblack from '../buttons/Searchblack';
import Menublack from '../buttons/Menublack';
import IconFavoriteblack from '../buttons/IconFavoriteblack';
import UserButtonBlack from '../buttons/UserButtonBlack'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../../assets/fonts/Vintage.ttf";
import Cookies from 'universal-cookie';


const textStyle = {
  display:"flex",
  color: "black",
  textTransform: "uppercase",
  fontFamily: "Vintage",
  fontSize: "3em",
  textShadow: "1px 1px 1px black",
  top: "calc(30% + 4em)"
};

const styleNavbar = {
  position: "fixed",
  zIndex: 10,
  width: "100%",
  opacity : 0.7,
  top: 0
};

const containerRight = {
  display: "flex",
  justifyContent: "flex-end",
  width: "95%",
};

const nav = {
  marginLeft: "60em",
}


function Navbarblack () {

  function deleteCookie() {
    const cookie = new Cookies();
    cookie.remove("token");
  }

    return (
      <Navbar bg="white" variant="white" style={styleNavbar}>
      <Container style={{marginRight: "8em"}}>
        <Navbar.Brand href="/"><Menublack/></Navbar.Brand>
        <Container style={containerRight}>
        <Navbar.Brand href=""><Searchblack/></Navbar.Brand>
        <Navbar.Brand href="/cart"><Panierblack/></Navbar.Brand>
        <Navbar.Brand onClick = {deleteCookie} href="/login"><IconFavoriteblack/></Navbar.Brand>
        <Navbar.Brand href="/login"><UserButtonBlack/></Navbar.Brand>
        </Container>
        </Container>
    </Navbar>
    );

}

export default Navbarblack;