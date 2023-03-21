import { BsBasket2} from "react-icons/bs";
import Button from 'react-bootstrap/Button';


function bagButton () {

    const colorBasket = {
        color: 'white',
        width: '31px',
        height: '30px',
        margin:"1rem",
    };
    
    const buttonStyle={
        textTransform: "uppercase",
        borderRadius:"1em",
        background:"lightsalmon",
        margin: "1rem",
        paddingRight:"5em",
        paddingLeft:"4em"
    }

    return (
        <div>
            <Button variant="outline-light" style={buttonStyle}>
                <BsBasket2 style={colorBasket}/>Ajouter au Panier
            </Button>
        </div>
    );
}

export default bagButton;
