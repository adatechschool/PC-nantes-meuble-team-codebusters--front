import { AiOutlineHeart } from "react-icons/ai";
import Button from 'react-bootstrap/Button';

const heartStyle = {
    color: 'white',
    fontSize:'1em',
    background:"none",
    width:"35.14px",
    height:"32px",
}


const buttonStyle={
    borderRadius:"10em",
    border:"none",
    display:"flex",
    background:"none",
    cursor:"pointer"

}

function heartButton (){
    return(
        <div>
            <Button variant="outline-light" style={buttonStyle}>
                <AiOutlineHeart style={heartStyle} />
            </Button>
        </div>
    )
    
}
export default heartButton;

