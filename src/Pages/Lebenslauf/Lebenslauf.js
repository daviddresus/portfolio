import './Lebenslauf.css';
import Title from '../../Components/Title/Title.js';

import Pdfviewer from '../../Components/Abstract/Pdfviewer.js';

import React, { useEffect } from 'react';

export default function Lebenslauf() {

  useEffect(() => {
    document.title = 'Lebenslauf';
  }, []);

  return (
    <div>
      <Title text="Lebenslauf" />

      <div id='lebenslauf_viewer'>
        <Pdfviewer data='Files/Lebenslauf.pdf' title='Lebensauf' />
      </div>
      
    </div>
  )
}