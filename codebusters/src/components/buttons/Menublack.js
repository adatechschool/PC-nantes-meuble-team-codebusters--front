import {HiBars3} from "react-icons/hi2";
import Button from 'react-bootstrap/Button';


function searchButton () {

    const colorBars = {
        color: 'black',
        width: '32',
        height: '30px',
    }

    const buttonStyle={
        borderRadius:"10em",
        border:"none",
        display:"flex",
        background:"none",
    }

    return (
        <div>
            <Button variant="outline-light" style={buttonStyle}>
                    <HiBars3 style={colorBars}/>
            </Button>
        </div>
    );
}

export default searchButton;