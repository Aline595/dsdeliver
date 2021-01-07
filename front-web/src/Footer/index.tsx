import React from 'react';

import "./styles.css";

import { ReactComponent as YoutubeIcon } from './youtube.svg';
import { ReactComponent as InstagramIcon } from './instagram.svg';
import { ReactComponent as LinkedinIcon } from './linkedin.svg';


function Footer(){
    return (
       <footer className="main-footer">
           App de entregas desenvolvido na semana DevSuperior.
           <div className="footer-icons">
                <a href="https://www.youtube.com" target="_new">
                    <YoutubeIcon/>
                </a>
                <a href="https://www.linkedin.com" target="_new">
                    <LinkedinIcon/>
                </a>
                <a href="https://www.instagram.com" target="_new">
                    <InstagramIcon/>
                </a>
           </div>
       </footer>
    )
}

export default Footer;