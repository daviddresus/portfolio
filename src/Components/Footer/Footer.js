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
                <div id='copyright'>
                    <p><span>Copyright © 2023 </span><span>David Esteves Rodrigues</span></p>
                </div>
                <p id='impressum' onClick={showImpressum}>Impressum</p>
            </footer>
        </div>
    );
}

export default Footer;