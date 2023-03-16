import { BsBasket2} from "react-icons/bs";
import Button from 'react-bootstrap/Button';


function bagButton () {

    const colorBasket = {
        color: 'white',
        width: '31px',
        height: '30px',
    };

    const buttonStyle={
        borderRadius:"10em",
        border:"none",
        display:"flex",
        background:"none"
    
    }

    return (
        <div>
            <Button variant="outline-light" style={buttonStyle}>
                <BsBasket2 style={colorBasket}/>
            </Button>
        </div>
    );
}

export default bagButton;
