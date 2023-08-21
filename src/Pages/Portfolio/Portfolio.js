import './Portfolio.css';
import Title from '../../Components/Title/Title.js';

import { useEffect } from 'react';

import Dropdown from '../../Components/DropDown/Dropdown.js';
import isLoggedIn from '../../Components/Navbar/Navbar.js';
import Pdfviewer from '../../Components/Abstract/Pdfviewer.js';

export default function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const grades = [
    { pdf_file: '', pdf_title: '', dropdown_title: 'bwd Noten' },
    { pdf_file: '', pdf_title: '', dropdown_title: 'gibb Noten' },
    { pdf_file: '', pdf_title: '', dropdown_title: 'üK Noten' },
    { pdf_file: '', pdf_title: '', dropdown_title: 'Zertifikate' }
  ]

  return (
    <div>
      <Title text="Portfolio" />
      {isLoggedIn ? (
        <iframe src="https://daviddre.com/portfolio_backend/portal.php?site=grades.php"></iframe>
      ) : (
        <p>Please log in to access the portfolio.</p>
      )}

      {grades.map((grade, index) => (
        <div key={index}>
          <Dropdown content={<Pdfviewer data={grade.pdf_file} title={grade.pdf_title} />} title={grade.dropdown_title} />
        </div>
      ))}
    </div>
  )
}