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
                <li className="li-footer"><h0><b>Adresse :</b></h0>
                    <p className="p-footer">Rue Ada Lovelace,<br/>
                                            44000 Nantes
                    </p>
                </li>
                <li className="li-footer"><h0><b>Ouverture :</b></h0>
                    <p className="p-footer">Du lundi au vendredi<br/>
                                            Le matin : de 9h30 à 12h30<br/>
                                            L'après midi : de 14h à 17h30
                    </p>
                </li>
                <li className="li-footer"><h0><b>Contact :</b></h0>
                    <p className="p-footer contact-footer"><BsFillTelephoneFill/>06.00.00.00.00</p> 
                    <p className="p-footer contact-footer"><IoMail/>funky-furnish@gmail.com</p>
                </li>
                <li className="li-footer sociaux">
                    <p className="p-footer">
                        <a href="https://www.facebook.com/"><AiFillFacebook/></a>
                    </p>
                    <p className="p-footer">
                        <a href="https://www.instagram.com/"><AiFillInstagram/></a>
                    </p>
                    <p className="p-footer">
                        <a href="https://www.linkedin.com/"><AiFillLinkedin/></a>
                    </p>
                </li>
            </ul>
        </div>
    )
}