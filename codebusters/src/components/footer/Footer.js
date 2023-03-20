import "../footer/footer.css";
import {BsFillTelephoneFill} from "react-icons/bs";
import {IoMail} from "react-icons/io5";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillInstagram} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";


export default function Footer(){
    return(
        <div className="footer">
            <ul className="ul-footer">
                <li className="li-footer">
                    <p className="p-footer">Rue Ada Lovelace,<br></br>44000 Nantes</p>
                </li>
                <li className="li-footer">
                    <p className="p-footer">Du lundi au vendredi</p>
                    <p className="p-footer">de 9h30 à 12h30</p>
                    <p className="p-footer">et de 14h à 17h30</p>
                </li>
                <li className="li-footer">
                    <p className="p-footer contact-footer"><BsFillTelephoneFill/>06.00.00.00.00</p>
                    <p className="p-footer contact-footer"><IoMail/>funky-furnish@gmail.com</p>
                </li>
                <li className="li-footer sociaux">
                    <p className="p-footer"><AiFillFacebook/></p>
                    <p className="p-footer"><AiFillInstagram/></p>
                    <p className="p-footer"><AiFillLinkedin/></p>
                </li>
            </ul>
        </div>
    )
}