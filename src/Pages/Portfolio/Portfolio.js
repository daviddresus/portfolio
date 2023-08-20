import './Portfolio.css';
import Title from '../../Components/Title/Title.js';

import { useEffect } from 'react';

import isLoggedIn from '../../Components/Navbar/Navbar.js';

export default function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  return (
    <div>
      <Title text="Portfolio" />
      {isLoggedIn ? (
        <iframe src="https://daviddre.com/portfolio_backend/portal.php?site=grades.php"></iframe>
      ) : (
        <p>Please log in to access the portfolio.</p>
      )}
    </div>
  )
}