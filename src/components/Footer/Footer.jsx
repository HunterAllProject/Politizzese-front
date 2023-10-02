import React from "react";

import './Footer.css'
import Fb from '@mui/icons-material/Facebook';
import Phone from '@mui/icons-material/PhoneInTalk';
import Mail from '@mui/icons-material/AttachEmail';
import Twitter from '@mui/icons-material/Twitter';
import Insta from '@mui/icons-material/Instagram';
import Whats from '@mui/icons-material/WhatsApp';
import MediaFooter from '../../assets/media_footer.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-left">
                <h3>precisa de suporte?</h3>
                <ul>
                    <li className="separado">
                        <div><Phone/></div> 
                        Fale Conosco
                    </li>
                    <li className="separado">
                        <div><Mail/></div> 
                        E-mail
                    </li>
                </ul>
            </div>

            <div className="footer-meio">
                <h3>siga-nos</h3>
                <ul>
                    <li> <Twitter/> </li>
                    <li> <Insta/> </li>
                    <li> <Fb/> </li>
                    <li> <Whats/> </li>
                </ul>
            </div>

            <div className="footer-right">
                <div className="logo-media">
                    <img src={MediaFooter} alt="imagem media" />
                </div>
                <p>© Copyright 2023. Todos os direitos reservados.</p>
            </div>

        </div>
    );
};
