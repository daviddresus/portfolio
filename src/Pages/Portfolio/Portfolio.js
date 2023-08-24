import './Portfolio.css';
import Title from '../../Components/Title/Title.js';

import { useEffect } from 'react';

import Dropdown from '../../Components/DropDown/Dropdown.js';
import isLoggedIn from '../../Components/Navbar/Navbar.js';

export default function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const grades = [
    { pdf_file: 'https://daviddre.com/portfolio_backend/portal.php?site=bwdnoten.php', dropdown_title: 'bwd Noten' },
    { pdf_file: 'https://daviddre.com/portfolio_backend/portal.php?site=gibbnoten.php', dropdown_title: 'gibb Noten' },
    { pdf_file: 'https://daviddre.com/portfolio_backend/portal.php?site=uknoten.php', dropdown_title: 'üK Noten' },
    { pdf_file: 'https://daviddre.com/portfolio_backend/portal.php?site=zertifikate.php', dropdown_title: 'Zertifikate' }
  ]

  return (
    <div>
      <body>
      <Title text="Portfolio" />
      <div id='all_grades_box'>
        <div id='grades_grid'>
          {grades.map((grade, index) => (
            <div key={index}>
              {isLoggedIn ? (
                <div>
                  <Dropdown content={<iframe src={grade.pdf_file}></iframe>} title={grade.dropdown_title} />
                </div>
              ) : (
                <p>Please log in to access the portfolio.</p>
              )}
            </div>
          ))}
        </div>
      </div>
      </body>
    </div>
  )
}