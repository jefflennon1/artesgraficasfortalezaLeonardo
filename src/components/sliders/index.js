import React from 'react'
import calendar from './images/calendar.jpg';
// import card from './images/cards.png';
import stamp from './images/stamp.jpg'
import './style.css'

export default function Sliders(){
  const time = 5000;
  let currentImageIndex = 0;
  
    function nextImage(){
      const images = document.querySelectorAll("#galeria img");
      const max = images.length;
      images[currentImageIndex].classList.remove("selected");
      currentImageIndex++;
      if(currentImageIndex >= max) currentImageIndex = 0;
      images[currentImageIndex].classList.add("selected");
    };
     function start(){
      setInterval(()=>{
        nextImage();
      }, time)
    }

return(
    <>
     <div className="sectionDiv" >
        <div className="galeria" id="galeria">
          <img className="selected" src={calendar} alt=""></img>
          <img  src={stamp} alt=""></img>
        </div>
     </div>
     {start()}
    </>
  )
  
}