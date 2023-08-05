import './Navbar.css';

const openSideMenu = () =>
{
  document.getElementById('side_navbar').style = "transform: translateX(0%); transition: 0.5s ease-in-out;";
}

const closeSideMenu = () =>
{
  document.getElementById('side_navbar').style = "transform: translateX(-100%); transition: 0.5s ease-in-out;";
}

/* <li id='profile'><a href='#'><img src='Images/profile.svg' alt='Profile Icon'/></a></li> */

function Navbar() {
  return (
    <div>
      <header>
        <div id='navbar'>
            <nav>
              <ul>
                <li id='hamburger' onClick={openSideMenu}><img src='Images/menu.svg' alt='Hamburger Icon'/></li>
                <li><a href='/'><img src='Images/logo.svg' alt='Logo'/></a></li>
                <li><a href='/lebenslauf'>Lebenslauf</a></li>
                <li><a href='/staerken'>Stärken</a></li>
                <li><a href='/itprojekte'>IT-Projekte</a></li>
                <li><a href='/interessen'>Interessen</a></li>
                <li><a href='/portfolio'>Portfolio</a></li>
                <li id='profile'><a href='/login'>Einloggen</a></li>
              </ul>
            </nav>
        </div>
      </header>
          <div id='side_navbar'>
              <nav>
                <ul>
                  <li className='side_link' id='close_button' onClick={closeSideMenu}><img src='Images/close.svg' alt='Close Button'/></li>
                  <li className='side_link'><a href='/'><img src='Images/logo.svg' alt='Logo'/></a></li>
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