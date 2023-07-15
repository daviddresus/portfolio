import './Itprojekte.css';
import Title from '../../Components/Title/Title.js';

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

          <div>
            <img className='project_image' src='Images/meine_erste_website.png' alt='Alte Website'></img>
          </div>
        </div>

        <div className='project_box_switch'>
          <div className='project_content_switch'>
            <h2>Meine erste Website</h2>
            <p>Meine erste Website habe ich im Praxistraining der gibb angefangen. Für diese Website wurde nur HTML 5 und CSS angewendet. Diese Website sollte mich vorstellen können.</p>
          </div>

          <hr className='vertical_line'></hr>

          <div>
            <img className='project_image' src='Images/meine_erste_website.png' alt='Alte Website'></img>
          </div>
        </div>
      </div>
    </div>
  )
}