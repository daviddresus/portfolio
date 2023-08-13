import './Navbar.css';

const openSideMenu = () => {
  document.getElementById('side_navbar').style = "transform: translateX(0%); transition: 0.5s ease-in-out;";
}

const closeSideMenu = () => {
  document.getElementById('side_navbar').style = "transform: translateX(-100%); transition: 0.5s ease-in-out;";
}

window.onscroll = function () { scrollFunction() };

function scrollFunction() {

  var links = document.getElementsByClassName("link");

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //When scrolling down:
    document.getElementById("navbar_content_holder").style = "height: 7.5vh; transition-duration: 0.5s";
    document.getElementById("logo").style = "height: 4vh; transition-duration: 0.5s";
    document.getElementById("hamburger_icon").style = "height: 4vh; transition-duration: 0.5s";
    for (var i = 0, length = links.length; i < length; i++) {
      links[i].style = "font-size: 1.5vh; transition-duration: 0.5s;";
    }
  } else {
    //When at the top:
    document.getElementById("navbar_content_holder").style = "height: 15vh; transition-duration: 0.5s";
    document.getElementById("logo").style = "height: 7vh; transition-duration: 0.5s";
    document.getElementById("hamburger_icon").style = "height: 7vh; transition-duration: 0.5s";
    for (var i = 0, length = links.length; i < length; i++) {
      links[i].style = "font-size: 2.5vh; transition-duration: 0.5s;";
    }
  }
}

/* <li id='profile'><a href='#'><img src='Images/profile.svg' alt='Profile Icon'/></a></li> */

function Navbar() {
  return (
    <div>
      {/* Will make sure that the margin set between the nav and the Element below remains intact */}
      <div className='invisible_box'></div>
      <header>
        <div id='navbar'>
          <nav>
            <ul id='navbar_content_holder'>
              <li id='hamburger' onClick={openSideMenu}><img src='Images/menu.svg' alt='Hamburger Icon' id='hamburger_icon' /></li>
              <li><a href='/'><img src='Images/logo.svg' alt='Logo' id='logo' /></a></li>
              <li><a className='link' href='/lebenslauf'>Lebenslauf</a></li>
              <li><a className='link' href='/staerken'>Stärken</a></li>
              <li><a className='link' href='/itprojekte'>IT-Projekte</a></li>
              <li><a className='link' href='/interessen'>Interessen</a></li>
              <li><a className='link' href='/portfolio'>Portfolio</a></li>
              <li id='profile'><a className='link' href='/login'>Einloggen</a></li>
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