import './Portfolio.css';
import Title from '../../Components/Title/Title.js';

import React, { useEffect } from 'react';

export default function Portfolio() {

  useEffect(() => {
    document.title = 'Portfolio';
  }, []);
  
  return (
    <div>
      <Title text="Portfolio"/>
      <iframe src="http://localhost/portfolio_backend/portal.php?site=blume.php"></iframe>
    </div>
  )
}