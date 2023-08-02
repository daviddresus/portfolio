import './Staerken.css'
import Title from '../../Components/Title/Title.js';

export default function Staerken() {

  const items = [
    { title: 'HTML', percentage: '85', id: '1' },
    { title: 'CSS', percentage: '80', id: '2' },
    { title: 'JS', percentage: '60', id: '3' },
    { title: 'Java', percentage: '60', id: '4' },
    { title: 'PHP', percentage: '45', id: '5' },
    { title: 'C#', percentage: '40', id: '6' },
    { title: 'Git', percentage: '65', id: '7' },
    { title: 'Python', percentage: '50', id: '8' }
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
            <div id='progressbar'>
              <div id='percentage' style={{ width: `${item.percentage}%`}}></div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}