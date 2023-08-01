import './Staerken.css'
import Title from '../../Components/Title/Title.js';

export default function Staerken() {

  const items = [
    { title: 'HTML', id: '1' },
    { title: 'CSS', id: '2' },
    { title: 'JS', id: '3' },
    { title: 'Java', id: '4' },
    { title: 'PHP', id: '5' },
    { title: 'Java', id: '6' },
    { title: 'JS', id: '3' },
    { title: 'Java', id: '4' },
    { title: 'PHP', id: '5' },
    { title: 'Java', id: '6' },
    { title: 'JS', id: '3' },
    { title: 'Java', id: '4' },
    { title: 'PHP', id: '5' },
    { title: 'Java', id: '6' },
    // Add more items as needed
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
          </div>
        ))}
      </div>

    </div>
  )
}