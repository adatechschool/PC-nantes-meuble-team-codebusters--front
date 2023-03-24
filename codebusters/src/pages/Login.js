import "bootstrap/dist/css/bootstrap.css";
import Navbarblack from "../components/TestComponents/Navbarblack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css";
import { callLogin, createUser } from "../data/ApiController";

const formStyle = {
  display: "flex",
  width: "20em",
  margin: "auto",
  flexDirection: "column",
};
const title = {
  fontSize: "1.5em",
  marginBottom: "1em",
  textAlign: "center",
};

const wrapperForm = {
  display: "flex",
  justifyContent: "space-evenly",
  paddingTop: "10em",
  marginBottom: "4em",
  textAlign: "left",
};

const buttonStyle = {
  border: "rgba(154, 113, 85, 0.2)",
  backgroundColor: "rgba(175, 128, 96, 0.928)",
  alignSelf: "center",
};

export default function Login() {
  async function login(event) {
    event.preventDefault();
    const response = await callLogin(
      document.getElementById("inputLoginEmail").value,
      document.getElementById("inputLoginPassword").value
    );
    if(response.rights.rights === true) {
      window.location.href = "/admin";
    } else {
      window.location.href = "/user";
    }
  }

  async function newUser(event) {
    event.preventDefault();
    const response = await createUser(
      document.getElementById("inputNewUserName").value,
      document.getElementById("inputNewUserEmail").value,
      document.getElementById("inputNewUserPassword").value
    );
    alert("Votre compte a bien été créé");
    window.location.href = "/login";
    console.log(response);
  }

  return (
    <div style={{ backgroundColor: "#FBF4F4" }}>
      <Navbarblack />
      <div style={wrapperForm}>
        <div className="loginForm">
          <Form onSubmit={login} style={formStyle}>
            <h1 style={title}>Connectez-vous</h1>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>

              <Form.Control
                type="email"
                placeholder="Email"
                id="inputLoginEmail"
              />

              <Form.Text className="text-muted">
                Nous ne partagerons jamais votre adresse email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>

              <Form.Control
                type="password"
                placeholder="Mot de passe"
                id="inputLoginPassword"
              />
            </Form.Group>

            <Button style={buttonStyle} variant="primary" type="submit">
              Envoyez
            </Button>
          </Form>
        </div>
        <div className="registrationForm">
          <Form onSubmit={newUser} style={formStyle}>
            <h1 style={title}>Enregistrez-vous</h1>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="name"
                placeholder="Nom"
                id="inputNewUserName"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                id="inputNewUserEmail"
              />
              <Form.Text className="text-muted">
                Nous ne partagerons jamais votre adresse email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                id="inputNewUserPassword"
              />
            </Form.Group>

            <Button style={buttonStyle} variant="primary" type="submit">
              Envoyez
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
