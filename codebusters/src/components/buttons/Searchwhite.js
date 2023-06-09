import { BsSearch} from "react-icons/bs";
import Button from 'react-bootstrap/Button';

function searchButton () {

    const colorSearch = {
        color: 'white',
        width: '31px',
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
                <BsSearch style={colorSearch}/>
            </Button>
        </div>
    );
}

export default searchButton;
