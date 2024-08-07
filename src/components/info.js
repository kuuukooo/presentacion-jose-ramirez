import React from 'react';
import About from './about.js';
import Footer from './footer.js';
import FotoPerfil from '../images/FotoPerfil.jpeg';
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

function Info() {
    return (
        <div className='info'>
            <img className='foto' src={FotoPerfil} alt='Foto de Perfil - José Ramírez' />
            <main className='cajaInfo'>
                <div className='cajaTextos'>
                    <h2 className='titulo'>José Ramírez</h2>
                    <h3 className='subtitulo'>Desarrollador Front End</h3>
                    <a href='https://jose-ramirez-portafolio.netlify.app/' target='_blank' rel='noreferrer'>
                    <p className='pagina'>jose-ramirez-portafolio.netlify.app</p>
                    </a>
                </div>
                <div className='cajaBotones'>
                    <a href="mailto:joseisaramirez2004@gmail.com">
                        <button className='boton email'><MdEmail className='iconoEmail' /> Email</button>
                    </a>
                    <a href="https://www.linkedin.com/in/jos%C3%A9-ram%C3%ADrez-b74256265/" target='_blank' rel='noreferrer'>
                        <button className='boton linkedIn'><FaLinkedin className='iconoLinkedIn' /> LinkedIn</button>
                    </a>
                </div>
                <About />
            </main>
            <Footer />
        </div>
    );
}

export default Info;