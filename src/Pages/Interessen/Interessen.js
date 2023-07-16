import './Interessen.css'
import Title from '../../Components/Title/Title.js';

export default function Interessen() {
  return (
    <div>
      <Title text="Interessen" />

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
    </div>
  )
}
