import './Interessen.css'
import Title from '../../Components/Title/Title.js';
import { useEffect } from 'react';

export default function Interessen() {

  const items = [
    { title: 'Frontend', id: '1' },
    { title: 'Game Development', id: '2' },
    { title: 'Editing', id: '3' }
    // Add more items as needed
  ];

  var placement = 0;
  var item = 2;

  const transparency = () => {
    if (items.length - item !== 0) {
      document.getElementById(item).style = 'opacity: 1; transition: ease-in-out 0.5s';
      document.getElementById(item + 1).style = 'opacity: 0.4; transition: ease-in-out 0.5s';
    }

    if (items.length - item !== 0 && items.length - item !== 1) {
      document.getElementById(item + 2).style = 'opacity: 0; transition: ease-in-out 0.5s';
    }

    if (item !== 1) {
      document.getElementById(item).style = 'opacity: 1; transition: ease-in-out 0.5s';
      document.getElementById(item - 1).style = 'opacity: 0.4; transition: ease-in-out 0.5s';
    }

    if (item !== 1 && item !== 2) {
      document.getElementById(item - 2).style = 'opacity: 0; transition: ease-in-out 0.5s';
    }
  };

  //makes sure that the const transparency is executed even if no button was clicked
  useEffect(() => {
    transparency();
  }, []);

  const goLeft = () => {
    if (item !== 1) {
      placement = placement + 27.2;
      document.getElementById('all_interest_boxes').style = `transform: translateX(${placement}%); transition: ease-in-out 0.5s`;
      item = item - 1;
      transparency();
    }
  };

  const goRight = () => {
    if (items.length - item !== 0) {
      placement = placement - 27.2;
      document.getElementById('all_interest_boxes').style = `transform: translateX(${placement}%); transition: ease-in-out 0.5s`;
      item = item + 1;
      transparency();
    }
  };

  return (
    <div>
      <Title text="Interessen" />
      <div id='slider'>
        <img id='left_button' src='Images/buttonleft.svg' alt='Left Button' onClick={goLeft} />

        <div id='all_interest_boxes'>
          {items.map((item, index) => (
            <div
              key={index}
              className='interest_box' id={item.id}>
              <p className='interest_title'>{item.title}</p>
            </div>
          ))}
        </div>

        <img id='right_button' src='Images/buttonright.svg' alt='Right Button' onClick={goRight} />
      </div>

      <div className='project_box'></div>
    </div>
  )
}
