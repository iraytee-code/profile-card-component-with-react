import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './profile-card-components/Heading';
import MainHeading from './profile-card-components/MainHeading';
import CardFooter  from './profile-card-components/CardFooter';

function CardWrapper() {
  return (
  <div className="card">
    <div className="cardEffect">
    <div className="card-info">
    <Heading />
      <MainHeading />
    </div>
    <div className="myFooter">
    <CardFooter />
  </div>
    </div>
    
  </div>
  
  
  );
  }
  
  // render tweet component to the dom
  ReactDOM.render(<CardWrapper />,
  document.querySelector('#root'));
  
  
