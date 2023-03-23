import { FiLogOut } from 'react-icons/fi';
import Button from 'react-bootstrap/Button';

const heartStyle = {
    color: 'black',
    background:"none",
    width:"31.14px",
    height:"32px",
}
const buttonStyle={
    borderRadius:"10em",
    border:"none",
    display:"flex",
    background:"none",
    cursor:"pointer"
}
function IconFavorite (){
    return(
        <div>
            <Button variant="outline-light" style={buttonStyle}>
                <FiLogOut style={heartStyle} />
            </Button>
        </div>
    )
}
export default IconFavorite;