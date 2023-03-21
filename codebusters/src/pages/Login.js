import "bootstrap/dist/css/bootstrap.css";
import Navbarblack from "../components/TestComponents/Navbarblack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../App.css"

const formStyle = {
  display: "flex",
  width: "20em",
  margin: "auto",
  flexDirection:"column"
};
const title ={
 fontSize:"1.5em",
 marginBottom:"1em",
 textAlign: "center"
}

const wrapperForm = {
  display: "Flex",
  justifyContent : "space-evenly",
  paddingTop: "10em",
  marginBottom: "4em",
  textAlign: "left"
};

const buttonStyle = {
   border: "rgba(154, 113, 85, 0.2)",
  backgroundColor: "rgba(175, 128, 96, 0.928)",
  alignSelf: "center"
}

export default function Login() {
  return (
    <div style={{ backgroundColor: "#FBF4F4" }}>
      <Navbarblack />
      <div style={wrapperForm}>
        <div className="loginForm" >
          <Form style={formStyle}>
            <h1 style={title}>Connectez-vous</h1>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Nous ne partagerons jamais votre adresse email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Button style={buttonStyle} variant="primary" type="submit">
              Envoyez
            </Button>
          </Form>
        </div>
        <div className="registrationForm" >
          <Form style={formStyle}>
            <h1 style={title}>Enregistrez-vous</h1>
            <Form.Group className="mb-2" controlId="formBasicName">
              <Form.Label>Nom</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-2" controlId="formBasicEmail">
              <Form.Label>Adresse email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Nous ne partagerons jamais votre adresse email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
  
            <Button style={buttonStyle} variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}
