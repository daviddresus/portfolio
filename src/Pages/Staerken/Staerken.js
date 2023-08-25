import './Staerken.css';
import Title from '../../Components/Title/Title.js';

import React, { useEffect } from 'react';

export default function Staerken() {

  useEffect(() => {
    document.title = 'Stärken';
  }, []);

  const items = [
    { title: 'HTML', percentage: '85', id: '1' },
    { title: 'CSS', percentage: '80', id: '2' },
    { title: 'JS', percentage: '60', id: '3' },
    { title: 'Java', percentage: '60', id: '4' },
    { title: 'PHP', percentage: '40', id: '5' },
    { title: 'C#', percentage: '20', id: '6' },
    { title: 'Git', percentage: '65', id: '7' },
    { title: 'Python', percentage: '50', id: '8' },
    { title: 'MySQL', percentage: '80', id: '9' },
    { title: 'React', percentage: '80', id: '10' },
    { title: 'Node.js', percentage: '70', id: '11' },
    { title: 'Blender', percentage: '35', id: '12' },
    { title: 'Unity', percentage: '55', id: '13' },
    { title: '.NET', percentage: '75', id: '14' }
  ];

  return (
    <div>
      <Title text="Stärken" />

      <div id='all_strength_boxes'>
        {items.map((item, index) => (
          <div
            key={index}
            className='strength_box' id={item.id}>
            <p className='strength_title'>{item.title}</p>
            <div id='progressbar'>
              <div id='percentage' style={{ width: `${item.percentage}%`}}></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}