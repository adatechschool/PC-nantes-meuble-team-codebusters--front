import Panierblack from '../buttons/Panierblack';
import Searchblack from '../buttons/Searchblack';
import Menublack from '../buttons/Menublack';
import IconFavoriteblack from '../buttons/IconFavoriteblack';
import UserButtonBlack from '../buttons/UserButtonBlack'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const styleNavbar = {
  position: "fixed",
  zIndex: 10,
  width: "100%",
  opacity : 0.7,
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

    return (
      <Navbar bg="white" variant="white" style={styleNavbar}>
      <Container style={{marginRight: "8em"}}>
        <Navbar.Brand href="/"><Menublack/></Navbar.Brand>
        <Container style={containerRight}>
        <Navbar.Brand href=""><Searchblack/></Navbar.Brand>
        <Navbar.Brand href=""><Panierblack/></Navbar.Brand>
        <Navbar.Brand href=""><IconFavoriteblack/></Navbar.Brand>
        <Navbar.Brand href="/login"><UserButtonBlack/></Navbar.Brand>
        </Container>
        </Container>
    </Navbar>
    );

}

export default Navbarblack;