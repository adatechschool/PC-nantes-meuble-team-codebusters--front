import Panierblack from '../buttons/Panierblack';
import Menublack from '../buttons/Menublack';
import Logout from '../buttons/Logout';
import UserButtonBlack from '../buttons/UserButtonBlack'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import "../../assets/fonts/Vintage.ttf";
import Cookies from 'universal-cookie';
import { getStoredToken } from '../../data/ApiController';


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
  // Fonction pour supprimer le cookie "token"
  function deleteCookie() {
    const cookie = new Cookies();
    cookie.remove("token");
  }
  // Fonction pour rediriger en fonction de l'état de connexion
  function ifLoggedIn() {
    if(getStoredToken() === undefined) {
      // Si aucun token n'est stocké, redirige vers la page de connexion
      window.location.href = "/login";
    } else if (getStoredToken() === "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOiI2NDE5Yjc2OTUyNTRhY2RjNDYyNzJjZDQiLCJlbWFpbCI6ImxhdXJlbGluZS5mbGV1cnlAZ21haWwuY29tIn0.4pFpu9CGjQ4crv0nw8fjlxUOMYVDXi1DOGPC3i69LR8") {
      // Si le token stocké correspond à un token spécifique, redirige vers la page d'administration
      window.location.href = "/admin";
    } else {
      // Sinon, redirige vers la page utilisateur
      window.location.href = "/user"
    }
  }

    return (
      <Navbar bg="white" variant="white" style={styleNavbar}>
      <Container style={{marginRight: "8em"}}>
        <Navbar.Brand href="/"><Menublack/></Navbar.Brand>
        <Container style={containerRight}>
        <Navbar.Brand href="/cart"><Panierblack/></Navbar.Brand>
        <Navbar.Brand onClick = {deleteCookie} href="/login"><Logout/></Navbar.Brand>
        <Navbar.Brand onClick={ifLoggedIn}><UserButtonBlack/></Navbar.Brand>
        </Container>
        </Container>
    </Navbar>
    );

}

export default Navbarblack;