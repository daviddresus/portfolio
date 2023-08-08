import { useRoutes } from 'react-router-dom';
import './Footer.css';

import Impressum from '../Impressum/Impressum';

function useRouteMatch(routes) {
    const match = useRoutes(routes)
    return match
}

function Footer() {

    const showImpressum = () => {
        const impressumBox = document.getElementById('impressum_box');
        impressumBox.classList.toggle('active');
    }

    const routes = [
        { path: '/'},
        { path: '/lebenslauf'},
        { path: '/staerken'},
        { path: '/itprojekte'},
        { path: '/interessen'},
        { path: '/portfolio'},
        /*if login is not in routes then the footer will also be fixed to the bottom of the page*/
        { path: '/login'}
    ];

    const isPageFound = useRouteMatch(routes);

    return (
        <div>
            <Impressum />
            <footer id='footer' className={!isPageFound ? 'error_page' : ''}>
                <div id='copyright'>
                    <p><span>Copyright © 2023 </span><span>David Esteves Rodrigues</span></p>
                </div>
                <p id='impressum' onClick={showImpressum}>Impressum</p>
            </footer>
        </div>
    );
}

export default Footer;