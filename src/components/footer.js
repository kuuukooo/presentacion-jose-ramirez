import React from 'react';
import TwitterIcon from '../images/TwitterIcon.png';
import FacebookIcon from '../images/FacebookIcon.png';
import InstagramIcon from '../images/InstagramIcon.png';
import GithubIcon from '../images/GitHubIcon.png';

function Footer() {
    return (
        <footer className='footer'>
            <div className='iconos'>
                <a href='https://x.com/kukoooo0' target='_blank' rel='noreferrer'><img src={TwitterIcon} alt='Icono de Twitter' /></a>
                <a href='https://www.facebook.com/jramirezfigueredo' target='_blank' rel='noreferrer'><img src={FacebookIcon} alt='Icono de Facebook' /></a>
                <a href='https://www.instagram.com/kuuko0/' target='_blank' rel='noreferrer'><img src={InstagramIcon} alt='Icono de Instagram' /></a>
                <a href='https://github.com/kuuukooo' target='_blank' rel='noreferrer'><img src={GithubIcon} alt='Icono de Github' /></a>
            </div>
        </footer>
    );
}

export default Footer;
