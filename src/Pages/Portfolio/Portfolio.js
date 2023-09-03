import './Portfolio.css';
import Title from '../../Components/Title/Title.js';

import { useEffect, useState } from 'react';

import Dropdown from '../../Components/DropDown/Dropdown.js';

export default function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  const grades = [
    { object_file: 'https://daviddre.com/portfolio_backend/portal.php?site=bwdnoten.php', pdf_file: 'https://daviddre.com/portfolio_backend/file.php?path=/bwd.pdf', file_name: 'bwd', dropdown_title: 'bwd Noten' },
    { object_file: 'https://daviddre.com/portfolio_backend/portal.php?site=gibbnoten.php', pdf_file: 'https://daviddre.com/portfolio_backend/file.php?path=/gibb.pdf', file_name: 'gibb', dropdown_title: 'gibb Noten' },
    { object_file: 'https://daviddre.com/portfolio_backend/portal.php?site=uknoten.php', pdf_file: 'https://daviddre.com/portfolio_backend/file.php?path=/uk.pdf', file_name: 'uk', dropdown_title: 'üK Noten' },
    { object_file: 'https://daviddre.com/portfolio_backend/portal.php?site=zertifikate.php', pdf_file: 'https://daviddre.com/portfolio_backend/file.php?path=/zertifikate.pdf', file_name: 'zertifikate', dropdown_title: 'Zertifikate' }
  ]

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function checkSessionStatus() {
      try {
        const response = await fetch('/portfolio_backend/profile.php', {
          method: 'GET',
          credentials: 'include' // This is important for sending cookies
        });

        if (response.ok) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error checking session:', error);
      }
    }

    checkSessionStatus();
  }, []);

  return (
    <div>
      <body>
        {isLoggedIn ? (
          <div>
            <Title text="Portfolio" />
            <div id='all_grades_box'>
              <div id='grades_grid'>
                {grades.map((grade, index) => (
                  <div key={index}>
                    <Dropdown content={<iframe src={grade.object_file}></iframe>} title={grade.dropdown_title} fileLoc={grade.pdf_file} fileName={grade.file_name}/>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div id="error_box">
              <h1>403</h1>
              <h2>Unauthorized</h2>
              <h3>Zugriff verweigert. Logen Sie sich zuerst ein</h3>
            </div>
          </div>
        )}
      </body>
    </div >
  )
}