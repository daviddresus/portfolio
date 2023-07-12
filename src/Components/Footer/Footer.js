import { useRoutes } from 'react-router-dom';
import './Footer.css';

function useRouteMatch(routes) {
    const match = useRoutes(routes)
    return match
}

function Footer() {

    const routes = [
        { path: '/'},
        { path: '/lebenslauf'},
        { path: '/staerken'},
        { path: '/itprojekte'},
        { path: '/interessen'},
        { path: '/portfolio'}
    ];

    const isPageFound = useRouteMatch(routes);

    return (
        <div>
            <footer id='footer' className={!isPageFound ? 'error_page' : ''}>
                <div id='copyright'>
                    <p><span>Copyright © 2023 </span><span>David Esteves Rodrigues</span></p>
                </div>
                <p id='impressum'>Impressum</p>
            </footer>
        </div>
    );
}

export default Footer;