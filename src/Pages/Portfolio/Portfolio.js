import './Portfolio.css';
import Title from '../../Components/Title/Title.js';

import { useEffect, useState } from 'react';

import Dropdown from '../../Components/DropDown/Dropdown.js';

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
                    <Dropdown content={<iframe src={grade.pdf_file}></iframe>} title={grade.dropdown_title} />
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