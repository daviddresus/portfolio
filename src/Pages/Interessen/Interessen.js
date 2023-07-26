import './Interessen.css'
import Title from '../../Components/Title/Title.js';
import { useState } from 'react';

export default function Interessen() {

  const [centeredIndex, setCenteredIndex] = useState(1);

  const items = [
    { title: 'Frontend' },
    { title: 'Game Development' },
    { title: 'Editing' },
    // Add more items as needed
  ];

  const goLeft = () => {
    const nextIndex = (centeredIndex + items.length - 1) % items.length;
    setCenteredIndex(nextIndex);
  };
  
  const goRight = () => {
    const nextIndex = (centeredIndex + 1) % items.length;
    setCenteredIndex(nextIndex);
  };

  const calculateMargin = (index) => {
    const containerWidth = 100 / 3 // 3 items displayed at a time
    const centeredItemOffset = index * containerWidth;
    return `calc(50% - ${centeredItemOffset}%)`;
  };

  return (
    <div>
      <Title text="Interessen" />

      <img className='button' src='Images/buttonleft.svg' alt='Left Button' onClick={goLeft} />

      <div id='all_interest_boxes' style={{ marginLeft: calculateMargin(centeredIndex) }}>
        {items.map((item, index) => (
            <div
              key={index}
              className='interest_box'>
              <p className='interest_title'>{item.title}</p>
            </div>
          ))}
      </div>

      <img className='button' src='Images/buttonright.svg' alt='Right Button' onClick={goRight} />

      <div className='project_box'></div>
    </div>
  )
}
