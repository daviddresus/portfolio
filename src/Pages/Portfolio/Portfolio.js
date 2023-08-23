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
    { pdf_file: 'https://daviddre.com/portfolio_backend/portal.php?site=grades.php', dropdown_title: 'bwd Noten' },
    { pdf_file: '', dropdown_title: 'gibb Noten' },
    { pdf_file: '', dropdown_title: 'üK Noten' },
    { pdf_file: '', dropdown_title: 'Zertifikate' }
  ]

  return (
    <div>
      <Title text="Portfolio" />
      <div id='all_grades_box'>
        {grades.map((grade, index) => (
          <div key={index}>
            {isLoggedIn ? (
              <Dropdown content={<iframe src={grade.pdf_file}></iframe>} title={grade.dropdown_title} />
            ) : (
              <p>Please log in to access the portfolio.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}