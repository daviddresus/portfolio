import './Footer.css';

import Impressum from '../Impressum/Impressum';

function Footer() {

    const showImpressum = () => {
        const impressumBox = document.getElementById('impressum_box');
        impressumBox.classList.toggle('active');
    }

    return (
        <div>
            <Impressum />
            <footer id='footer'>
                <div className='left_footer_side'>
                    <div className='external_links'>
                        <a href='https://www.linkedin.com/in/david-esteves-rodrigues-881492239/' target='blank'><img src='Images/linkedin.svg' /></a>
                        <a href='https://github.com/daviddresus' target='blank'><img src='Images/github.svg' /></a>
                    </div>
                    <div id='copyright'>
                        <p><span>Copyright © 2023 </span><span>David Esteves Rodrigues</span></p>
                    </div>
                </div>
                <p id='impressum' onClick={showImpressum}>Impressum</p>
            </footer>
        </div>
    );
}

export default Footer;