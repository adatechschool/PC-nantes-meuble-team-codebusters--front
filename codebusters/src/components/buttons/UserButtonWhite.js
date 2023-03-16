import {TbUserCircle} from "react-icons/tb";
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
    cursor:"pointer",
    position:"relative"

}

function userButton (){
    return(
        <div>
            <Button variant="outline-light" style={buttonStyle}>
                <TbUserCircle style={heartStyle} />
            </Button>
        </div>
    )
    
}
export default userButton;