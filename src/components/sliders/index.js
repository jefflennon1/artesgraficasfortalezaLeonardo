import React from 'react'
// import calendar from './images/calendar.jpg';
// import card from './images/cards.png';
// import stamp from './images/stamp.jpg'
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
          <img  src="https://images.unsplash.com/photo-1496389164152-053867affa71?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80" alt=""></img>
          <img className="selected" src="https://i2.wp.com/blog.360imprimir.com.br/wp-content/uploads/sites/5/2019/04/Capa-Artigo-Blog-360-1-PT-min.png?resize=1350%2C512&ssl=1" alt=""></img>
          <img src="https://conteudo.precocerto.co/wp-content/uploads/2017/04/10-dicas-cartao-de-visita.png" alt=""/>
          <img src="https://i.pinimg.com/originals/33/ca/62/33ca625bb4e322a1c3b4e75cb8cb06df.jpg" alt=""/>
          <span className="titleSpan" >ARTES GRÁFICAS</span>
          <span className="titleSpan donoDoSite">Leonardo Moura</span>
        </div>
     </div>
     {start()}
    </>
  )
  
}