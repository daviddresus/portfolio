import './Navbar.css';

import { useEffect, useState } from 'react';

const openSideMenu = () => {
  document.getElementById('side_navbar').style = "transform: translateX(0%); transition: 0.5s ease-in-out;";
}

const closeSideMenu = () => {
  document.getElementById('side_navbar').style = "transform: translateX(-100%); transition: 0.5s ease-in-out;";
}

function Navbar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const showLogout = () => {
    const logoutButton = document.getElementById('logout');
    logoutButton.style = 'opacity: 1; transition-duration: 0.5s';
  };
  
  const hideLogout = () => {
    const logoutButton = document.getElementById('logout');
    logoutButton.style = 'opacity: 0; transition-duration: 0.5s';
  };

  return (
    <div>
      {/* Will make sure that the margin set between the nav and the Element below remains intact */}
      <div className='invisible_box'></div>
      <header>
        <div id='navbar'>
          <nav>
            <ul style={{ height: isScrolled ? '7.5vh' : '15vh', transitionDuration: '0.5s' }} id='navbar_content_holder'>
              <li id='hamburger' className='hoverable' onClick={openSideMenu}>
                <img src='Images/menu.svg' alt='Hamburger Icon' id='hamburger_icon' style={{ height: isScrolled ? '4vh' : '6vh', transitionDuration: '0.5s' }} />
              </li>
              <li className='hoverable'>
                <a href='/'>
                  <img src='Images/logo.svg' alt='Logo' id='logo' style={{ height: isScrolled ? '4vh' : '7vh', transitionDuration: '0.5s' }} />
                </a>
              </li>
              <li className='hoverable'><a style={{ fontSize: isScrolled ? '1.5vh' : '2.5vh', transitionDuration: '0.5s' }} href='/lebenslauf'>Lebenslauf</a></li>
              <li className='hoverable'><a style={{ fontSize: isScrolled ? '1.5vh' : '2.5vh', transitionDuration: '0.5s' }} href='/staerken'>Stärken</a></li>
              <li className='hoverable'><a style={{ fontSize: isScrolled ? '1.5vh' : '2.5vh', transitionDuration: '0.5s' }} href='/itprojekte'>IT-Projekte</a></li>
              <li className='hoverable'><a style={{ fontSize: isScrolled ? '1.5vh' : '2.5vh', transitionDuration: '0.5s' }} href='/interessen'>Interessen</a></li>
              <li className='hoverable'><a style={{ fontSize: isScrolled ? '1.5vh' : '2.5vh', transitionDuration: '0.5s' }} href='/portfolio'>Portfolio</a></li>
              {isLoggedIn ? (
                <div id='profile'>
                  <li><img src='Images/profile.svg' alt='Profile Icon' id='profile_icon' onMouseEnter={showLogout} onMouseLeave={hideLogout} style={{ height: isScrolled ? '4vh' : '7vh', transitionDuration: '0.5s' }} /></li>
                  <div id='logout' onMouseEnter={showLogout} onMouseLeave={hideLogout}><a href='https://daviddre.com/portfolio_backend/logout.php' id='logout_button'>Ausloggen</a></div>
                </div>
              ) : (
                <li id='profile' className='hoverable'><a style={{ fontSize: isScrolled ? '1.5vh' : '2.5vh', transitionDuration: '0.5s' }} href='/login'>Einloggen</a></li>
              )}
            </ul>
          </nav>
        </div>
      </header>
      <div id='side_navbar'>
        <nav>
          <ul>
            <li className='side_link' id='close_button' onClick={closeSideMenu}><img src='Images/close.svg' alt='Close Button' /></li>
            <li className='side_link'><a href='/'><img src='Images/logo.svg' alt='Logo' /></a></li>
            <li className='side_link'><a href='/lebenslauf'>Lebenslauf</a></li>
            <li className='side_link'><a href='/staerken'>Stärken</a></li>
            <li className='side_link'><a href='/itprojekte'>IT-Projekte</a></li>
            <li className='side_link'><a href='/interessen'>Interessen</a></li>
            <li className='side_link'><a href='/portfolio'>Portfolio</a></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;