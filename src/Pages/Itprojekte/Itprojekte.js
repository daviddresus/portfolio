import './Itprojekte.css';
import Title from '../../Components/Title/Title.js';

import Dropdown from '../../Components/DropDown/Dropdown.js';
import Abstract from '../../Components/Abstract/Abstract.js';

export default function Itprojekte() {

  return (
    <div>
      <Title text="IT-Projekte" />
      <div id='all_project_boxes'>
        <div className='project_box'>
          <div className='project_content'>
            <h2>Meine erste Website</h2>
            <p>Meine erste Website habe ich im Praxistraining der gibb angefangen. Für diese Website wurde nur HTML 5 und CSS angewendet. Diese Website sollte mich vorstellen können.</p>
          </div>

          <hr className='vertical_line'></hr>

          <img className='project_image' src='Images/meine_erste_website.png' alt='Alte Website'></img>
        </div>

        <Dropdown content={Abstract} title={'Abstract'}/>

        <div className='project_box_switch'>
          <div className='project_content_switch'>
            <h2>The Last Chance</h2>
            <p>The Last Chance ist ein Shooter Spiel, welches mit Javascript Programmiert wurde. In diesem Spiel muss der Spieler gegen einer unendlichen Anzahl an Zombies kämpfen.</p>
          </div>

          <hr className='vertical_line'></hr>

          <img className='project_image' src='Images/the_last_chance.png' alt='Alte Website'></img>
        </div>

        <div className='project_box'>
          <div className='project_content'>
            <h2>Meine erste Bewerbungswebsite</h2>
            <p>bla bla</p>
          </div>

          <hr className='vertical_line'></hr>

          <img className='project_image' src='Images/meine_erste_website.png' alt='Alte Website'></img>

        </div>

        <div className='project_box_switch'>
          <div className='project_content_switch'>
            <h2>Discord Bot</h2>
            <p>bla bla</p>
          </div>

          <hr className='vertical_line'></hr>

          <img className='project_image' src='Images/the_last_chance.png' alt='Alte Website'></img>
        </div>

        <div className='project_box'>
          <div className='project_content'>
            <h2>Maui App</h2>
            <p>bla bla</p>
          </div>

          <hr className='vertical_line'></hr>

          <img className='project_image' src='Images/meine_erste_website.png' alt='Alte Website'></img>
        </div>

        <div className='project_box_switch'>
          <div className='project_content_switch'>
            <h2>Android App</h2>
            <p>bla bla</p>
          </div>

          <hr className='vertical_line'></hr>

          <img className='project_image' src='Images/the_last_chance.png' alt='Alte Website'></img>
        </div>
      </div>
    </div>
  )
}