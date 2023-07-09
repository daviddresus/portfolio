import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar.js'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <div className='box'>
      <div className='content_box'>
        <p className='box_title'>Lebenslauf</p>
      </div>
      <p className='description'>Meine bisherigen schulischen Werdegänge mit allen relevanten Informationen</p>
    </div>

    <hr className='line'></hr>

    <div className='box_switch'>
      <p className='description_switch'>Meine bisherigen schulischen Werdegänge mit allen relevanten Informationen</p>
      <div className='content_box_switch'>
        <p className='box_title'>Lebenslauf</p>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
