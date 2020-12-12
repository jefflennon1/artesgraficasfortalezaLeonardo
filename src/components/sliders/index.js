import React from 'react'
import calendar from './images/calendar.png';
import card from './images/cards.png';
import stamp from './images/stamp.png'
import './style.css'

export default function Sliders(){
  const images = [calendar, card, stamp];
  
  return(
    <>
     <div className="galeria">
       {images.map( image => <img src={image} className="foto"/>)}
     </div>
    </>
  )
}