import './Itprojekte.css';
import Title from '../../Components/Title/Title.js';

const openAbstract = () => {
  document.getElementById('side_navbar').style = "transform: translateX(-100%); transition: 0.5s ease-in-out;";
}

export default function Itprojekte() {
  return (
    <div>
      <Title text="IT-Projekte" />
      <div id='all_project_boxes'>
        <div className='project_box_with_abstract'>
          <div className='project_box'>
            <div className='project_content'>
              <h2>Meine erste Website</h2>
              <p>Meine erste Website habe ich im Praxistraining der gibb angefangen. Für diese Website wurde nur HTML 5 und CSS angewendet. Diese Website sollte mich vorstellen können.</p>
              <div className='dropdown_button'>
                <span>Abstract</span><img src='Images/dropdown.svg' alt='Dropdown Icon' className='dropdown_icon'/>
              </div>
            </div>

            <hr className='vertical_line'></hr>

            <img className='project_image' src='Images/meine_erste_website.png' alt='Alte Website'></img>
          </div>
          <object data='Files/IMS_Projekt_Survival_shooter_Game.pdf' type='application/pdf' title="The Last Chance" id='tlc_viewer'>
            <div className='pdf_error_msg'>
              <p>Ihr Webbrowser kann diese PDF-Datei aktuell nicht anzeigen. Stattdessen können Sie eine Kopie davon herunterladen mit dem unten stehenden Link:</p>
            </div>

            <div className='pdf_download_link'>
              <a href="Files/IMS_Projekt_Survival_shooter_Game.pdf" download="IMS_Projekt_Survival_shooter_Game">Clicken Sie Hier um Ihren download zu starten</a>
            </div>
          </object>
        </div>

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