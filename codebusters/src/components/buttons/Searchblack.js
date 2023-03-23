import { BsSearch} from "react-icons/bs";
import Button from 'react-bootstrap/Button';

function searchButton () {

    const colorSearch = {
        color: 'black',
        width: '31px',
        height: '30px',
    }

    const buttonStyle={
        borderRadius:"10em",
        border:"none",
        display:"flex",
        background:"none",
    
    }
    const searchStyle={
        display: "flex",
        justifyContent: "center",
    }

    return (
        <div style={searchStyle}>
           <Button variant="outline-light" style={buttonStyle}>
                <BsSearch style={colorSearch}/>
            </Button>
        </div>
    );
}

export default searchButton;