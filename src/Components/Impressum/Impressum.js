import React from 'react'
import './Impressum.css';

export default function Impressum() {

    const closeImpressum = () => {
        const impressumBox = document.getElementById('impressum_box');
        impressumBox.classList.remove('active'); // Remove the 'active' class to hide the box
    };

    return (
        <div>
            <div id='impressum_box'>
                <img id='impressum_close_button' alt='Close Button' src='Images/close.svg' onClick={closeImpressum} />

                <h1 className='impressum_title'>Impressum</h1>

                <h2 className='impressum_subtitle'>Angaben</h2>
                <p className='impressum_text'>David Esteves Rodrigues</p>
                <p className='impressum_text'>Müntschemiergasse 3</p>
                <p className='impressum_text'>3232 Ins</p>

                <h2 className='impressum_subtitle'>Kontakt</h2>
                <a className='impressum_text' href="tel:+41798704446">+41 79 870 44 46</a>
                <a className='impressum_text' href="mailto:davidrodriguesDRE@hotmail.com">E-Mail: davidrodriguesDRE@hotmail.com</a>
            </div>
        </div>
    )
}