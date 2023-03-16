import Panierwhite from './buttons/Panierwhite';
import Searchwhite from './buttons/Searchwhite';
import Menuwhite from './buttons/Menuwhite';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const nav = {
  marginLeft: "55em",
}


function Headerwhite () {

    return (
      <Navbar bg="white" variant="white">
      <Container style={{marginRight: "8em"}}>
        <Navbar.Brand href="#home"><Menuwhite/></Navbar.Brand>
        <Nav style={nav} className="me-auto">
          <Nav.Link href="#home"><Searchwhite/></Nav.Link>
          <Nav.Link href="#features"><Panierwhite/></Nav.Link>
          <Nav.Link href="#pricing"><Panierwhite/></Nav.Link>
          <Nav.Link href="#pricing"><Panierwhite/></Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );

}

export default Headerwhite;