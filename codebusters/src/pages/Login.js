import "bootstrap/dist/css/bootstrap.css";
import Navbarblack from "../components/TestComponents/Navbarblack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const formStyle = {
  width: "20%",
  margin: "auto",
};

const wrapperForm = {
  paddingTop: "15em",
  marginBottom: "4em"
};

export default function Login() {
  return (
    <div style={{ backgroundColor: "#FBF4F4" }}>
      <Navbarblack />
      <div style={wrapperForm}>
        
        <Form style={formStyle}>
          <h1>Login !</h1>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}
