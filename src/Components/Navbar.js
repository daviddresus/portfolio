import './Navbar.css';

const openSideMenu = () => 
{
  document.getElementById('side_navbar').style = "transform: translateX(0%); transition: 0.5s ease-in-out;";
}

const closeSideMenu = () => 
{
  document.getElementById('side_navbar').style = "transform: translateX(-100%); transition: 0.5s ease-in-out;";
}

function Navbar() {
  return (
    <div>
      <header>
        <div id='navbar'>
            <nav>
              <ul>
                <li id='hamburger' onClick={openSideMenu}><img src='Images/menu.svg' alt='Hamburger Icon'/></li>
                <li><a href='index.js'><img src='Images/logo.svg' alt='Logo'/></a></li>
                <li><a href='#'>Lebenslauf</a></li>
                <li><a href='#'>Stärken</a></li>
                <li><a href='#'>IT-Projekte</a></li>
                <li><a href='#'>Interessen</a></li>
                <li><a href='#'>Portfolio</a></li>
                <li id='profile'><a href='#'><img src='Images/profile.svg' alt='Profile Icon'/></a></li>
              </ul>
            </nav>
        </div>
      </header>
          <div id='side_navbar'>
              <nav>
                <ul>
                  <li className='side_link close_button' onClick={closeSideMenu}><img src='Images/close.svg' alt='Logo'/></li>
                  <li className='side_link'><a href='#'><img src='Images/logo.svg' alt='Logo'/></a></li>
                  <li className='side_link'><a href='#'>Lebenslauf</a></li>
                  <li className='side_link'><a href='#'>Stärken</a></li>
                  <li className='side_link'><a href='#'>IT-Projekte</a></li>
                  <li className='side_link'><a href='#'>Interessen</a></li>
                  <li className='side_link'><a href='#'>Portfolio</a></li>
                </ul>
              </nav>
          </div>
        <body>
          
        </body>
    </div>
  );
}

export default Navbar;