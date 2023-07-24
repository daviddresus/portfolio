import './Interessen.css'
import Title from '../../Components/Title/Title.js';

const goLeft = () => {
  document.getElementById('all_interest_boxes').style = "transform: translateX(27%); transition: 0.5s ease-in-out;";
}

const goRight = () => {
  document.getElementById('all_interest_boxes').style = "transform: translateX(-27%); transition: 0.5s ease-in-out;";
}

export default function Interessen() {
  return (
    <div>
      <Title text="Interessen" />

      <img className='button' src='Images/buttonleft.svg' alt='Left Button' onClick={goLeft} />

      <div id='all_interest_boxes'>

        <div className='interest_box'>
          <p className='intereset_title'>Frontend</p>
        </div>

        <div className='interest_box'>
          <p className='intereset_title'>Game Development</p>
        </div>

        <div className='interest_box'>
          <p className='intereset_title'>Editing</p>
        </div>

      </div>

      <img className='button' src='Images/buttonright.svg' alt='Right Button' onClick={goRight} />

      <div className='project_box'></div>
    </div>
  )
}
