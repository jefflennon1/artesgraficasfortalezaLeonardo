import React from 'react';
import './style.css';

export default function Home(){
  return(
    <>
      <div className="container-menu">
          <div className="homePage menu">
             <a href="#topo"  className="homePage menu">HOME</a>
          </div>
          <div className="contato menu">
            <a href="#footer">CONTATO</a>
          </div>
      </div>
    </>
  )
}