import './Itprojekte.css';
import Title from '../../Components/Title/Title.js';

import Dropdown from '../../Components/DropDown/Dropdown.js';
import Abstract from '../../Components/Abstract/Pdfviewer.js';

export default function Itprojekte() {

  const projects = [
    { title: 'Meine erste Website', text: 'Meine erste Website habe ich im Praxistraining der gibb angefangen. Für diese Website wurde nur HTML 5 und CSS angewendet. Diese Website sollte mich vorstellen können.', img: '/Images/meine_erste_website.png', pdf_file: 'Files/IMS_Projekt_Survival_shooter_Game.pdf', pdf_title: 'The Last Chance', id: '1' },
    { title: 'The Last Chance', text: 'The Last Chance ist ein Shooter Spiel, welches mit Javascript Programmiert wurde. In diesem Spiel muss der Spieler gegen einer unendlichen Anzahl an Zombies kämpfen.', img: 'Images/the_last_chance.png', pdf_file: '', pdf_name: '', id: '2' },
    { title: 'Meine erste Bewerbungswebsite', text: 'bla bla', img: '', pdf_file: '', pdf_name: '', id: '3' },
    { title: 'Discord Bot', text: 'bla bla', img: '', pdf_file: '', pdf_name: '', id: '4' },
    { title: 'Maui App', text: 'bla bla', img: '', pdf_file: '', pdf_name: '', id: '5' },
    { title: 'Android App', text: 'bla bla', img: '', pdf_file: '', pdf_name: '', id: '6' }
  ];

  const evenOrOddClasses = (id) => {
    const boxClassName = id % 2 === 0 ? 'project_box_switch' : 'project_box';
    const contentClassName = id % 2 === 0 ? 'project_content_switch' : 'project_content';
    return { boxClassName, contentClassName };
  }

  return (
    <div>
      <Title text="IT-Projekte" />
      <div id='all_project_boxes'>
        {projects.map((project, index) => (
          <div key={index}>
            <div className='project_box_with_abstract'>
              <div className={evenOrOddClasses(project.id).boxClassName}>
                <div className={evenOrOddClasses(project.id).contentClassName}>
                  <h2>{project.title}</h2>
                  <p>{project.text}</p>
                </div>

                <hr className='vertical_line'></hr>

                <img className='project_image' src={project.img} alt='Bild vom Projekt'></img>
              </div>
              <Dropdown content={<Abstract data={project.pdf_file} title={project.pdf_title} />} title={'Abstract'} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}