import './Itprojekte.css';
import Title from '../../Components/Title/Title.js';

import Dropdown from '../../Components/DropDown/Dropdown.js';
import Pdfviewer from '../../Components/Abstract/Pdfviewer.js';

import React, { useEffect } from 'react';

export default function Itprojekte() {

  useEffect(() => {
    document.title = 'IT-Projekte';
  }, []);

  const projects = [
    { title: 'Meine erste Website', text: 'Meine erste Website habe ich im Praxistraining der gibb angefangen. Für diese Website wurde nur HTML 5 und CSS angewendet. Diese Website sollte mich vorstellen können.', img: '/Images/meine_erste_website.png', pdf_file: 'Files/Erste_Website.pdf', file_name: 'Erste_Website', pdf_title: 'Erste Website', id: '1' },
    { title: 'The Last Chance', text: 'The Last Chance ist ein Shooter Spiel, welches mit Javascript Programmiert wurde. In diesem Spiel muss der Spieler gegen einer unendlichen Anzahl an Zombies kämpfen.', img: 'Images/the_last_chance.png', pdf_file: 'Files/The_Last_Chance.pdf', file_name: 'The_Last_Chance', pdf_title: 'The Last Chance', id: '2' },
    { title: 'Meine erste Bewerbungswebsite', text: 'In einer der Module bei der gibb konnten wir eine Website erstellen mit allen Frameworks, die wir wollten. Damals blieb ich mit dem Standard HTML, CSS und JavaScript. Für das Thema durfte man frei auswählen und deshalb entschied ich mir, meine erste Bewerbungswebsite zu erstellen.', img: 'Images/erste_bewerbungswebsite.png', pdf_file: 'Files/Erste_Bewerbungswebsite.pdf', file_name: 'Erste_Bewerbungswebsite', pdf_title: 'Erste Bewerbungswebsite', id: '3' },
    { title: 'Discord Bot', text: 'Dies war ein Projekt, welches ich in einer Gruppe von drei Leute entwickelt habe. Dieser Bot kann auf Discord benutzt werden (eine Social Platform) und ist dafür verantwortlich, bilder von Google zu suchen ohne dafür einen Browser öffnen zu müssen.', img: 'Images/searchify.png', pdf_file: 'Files/Discord_Bot.pdf', file_name: 'Discord_Bot', pdf_title: 'Searchify', id: '4' },
    { title: 'Maui App', text: 'Bei diesem Projekt war .Net Maui vor etwa 6 Monaten herausgekommen. Es war ein spannender Thema, bei welcher wir eine Desktop-Applikation entwickeln durften, indem wir C# und XAML benutzt haben. Für diese App war die Themenauswahl auch frei, welhalb ich mich für gibb Support entschied.', img: 'Images/maui_app.png', pdf_file: 'Files/Maui_App.pdf', file_name: 'Maui_App', pdf_title: 'Maui App', id: '5' },
    { title: 'Android App', text: 'In einer Zweiergruppe wurde diese Android App während einem üK zusammengestellt. Java und XAML sind die Sprachen, die verwendet wurden, um solches Resultat zu erreichen. Bei dieser App kann man das Astronomiebild des Tages sehen sowie weitere Infos über alle.', img: 'Images/solar_search.png', pdf_file: 'Files/Android_App.pdf', file_name: 'Android_App', pdf_title: 'Solar Search', id: '6' }
  ];

  const evenOrOddClasses = (id) => {
    const boxClassName = id % 2 === 0 ? 'project_box_switch' : 'project_box';
    const contentClassName = id % 2 === 0 ? 'project_content_switch' : 'project_content';
    return { boxClassName, contentClassName };
  }

  return (
    <div>
      <Title text="IT-Projekte" />
      <div className='download_all_files'>
        <a href='Files/Abstracts.zip' download='Abstracts'><span>Alle Abstracts</span> Herunterladen</a>
      </div>
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
              <Dropdown content={<Pdfviewer data={project.pdf_file} title={project.pdf_title} />} title={'Abstract'} fileLoc={project.pdf_file} fileName={project.file_name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}