import './Home.css';

import React, { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        document.title = 'Home';
      }, []);

    const links = [
        { title: 'Lebenslauf', redirect: '/lebenslauf', desc: 'Meine bisherigen schulischen Werdegänge mit allen relevanten Informationen', id: '1' },
        { title: 'Stärken', redirect: '/staerken', desc: 'All meine IT-Kenntnisse, die ich momentan habe und wie gut ich diese jeweils beherrsche', id: '2' },
        { title: 'IT-Projekte', redirect: '/itprojekte', desc: 'Einige Projekte, die ich persönlich als grosse Fortschritte empfinde', id: '3' },
        { title: 'Interessen', redirect: '/interessen', desc: 'All das, was ich in meiner Freizeit mache oder was ich sonst gerne mache', id: '4' },
        { title: 'Portfolio', redirect: '/portfolio', desc: 'Meine Noten vom 1. bis zum 2. Schuljahr von der gibb, von bbc und von bwd', id: '5' }
    ];

    const evenOrOddClasses = (id) => {
        const boxClassName = id % 2 === 0 ? 'box_switch' : 'box';
        const descClassName = id % 2 === 0 ? 'description_switch' : 'description';
        const contentClassName = id % 2 === 0 ? 'content_box_switch' : 'content_box';
        return { boxClassName, descClassName, contentClassName };
    }

    return (
        <div id='all_content_boxes'>
            {links.map((link, index) => (
                <div key={index}>
                    <div className={evenOrOddClasses(link.id).boxClassName}>
                        <a href={link.redirect}>
                            <div className={evenOrOddClasses(link.id).contentClassName}>
                                <p className='box_title'>{link.title}</p>
                            </div>
                        </a>
                        <p className={evenOrOddClasses(link.id).descClassName}>{link.desc}</p>
                    </div>
                    {/* makes it so that the last element doesn't have a line below him */}
                    {index !== links.length - 1 && <hr className='line'></hr>}
                </div>
            ))}
        </div>
    )
}