import './Interessen.css';
import Title from '../../Components/Title/Title.js';
import { useState, useEffect } from 'react';

export default function Interessen() {

  useEffect(() => {
    document.title = 'Interessen';
  }, []);

  const items = [
    { title: 'Frontend', id: '1' },
    { title: 'Game Development', id: '2' },
    { title: 'Editing', id: '3' }
  ];

  const contextToTheItem = [
    { text: 'First Placeholder', alt: 'Image', src: 'Images/the_last_chance.png', id: '1' },
    { text: 'Second Placeholder', alt: 'Image', src: 'Images/logo.svg', id: '2' },
    { text: 'Third Placeholder', alt: 'Image', src: 'Images/meine_erste_website.png', id: '3' }
  ]

  const getCssVariableValue = (variableName) => {
    const styles = getComputedStyle(document.documentElement);
    return parseInt(styles.getPropertyValue(variableName));
  };

  const boxWidth = getCssVariableValue('--box-width');
  const spaceBetween = getCssVariableValue('--space-between');

  const [currentItem, setCurrentItem] = useState(2);
  const [placement, setPlacement] = useState(0);

  const interestContent = contextToTheItem[currentItem - 1];

  useEffect(() => {
    const allInterestBoxes = document.getElementById('all_interest_boxes');
    allInterestBoxes.style.transition = 'transform ease-in-out 0.5s';
    allInterestBoxes.style.transform = `translateX(${placement}%)`;
    
    updateOpacity();
  }, [placement]);

  const updateOpacity = () => {
    for (let i = 1; i <= items.length; i++) {
      const itemElement = document.getElementById(i);
      if (i === currentItem) {
        itemElement.style.opacity = '1';
        itemElement.style.transform = 'scale(1) rotateZ(45deg)';
      } else if (i === currentItem + 1 || i === currentItem - 1) {
        itemElement.style.opacity = '0.4';
        itemElement.style.transform = 'scale(0.7) rotateZ(45deg)';
      } else {
        itemElement.style.opacity = '0';
        itemElement.style.transform = 'scale(0.5) rotateZ(45deg)';
      }
    }
  };

  const goLeft = () => {
    if (currentItem !== 1) {
      setPlacement(placement + boxWidth + spaceBetween);
      setCurrentItem(currentItem - 1);
    }
  };

  const goRight = () => {
    if (items.length - currentItem !== 0) {
      setPlacement(placement - boxWidth - spaceBetween);
      setCurrentItem(currentItem + 1);
    }
  };

  return (
    <div id='interest_body'>
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

      <div className='interest_content_box'><img className='interest_image' alt={interestContent.alt} src={interestContent.src}/><p>{interestContent.text}</p></div>
    </div>
  )
}
