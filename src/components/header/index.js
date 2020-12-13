import React, {useState} from 'react';
import './styles.css';
import iconPc from './images/computador-white.png';
import impressoa from './images/imprressora-white.png'

export default function Header(){
 
  return(
    <>
      <header className="header">
        <h2>
        <img src={impressoa}/>
          Artes Gráficas &nbsp;&nbsp;&nbsp; 
        <img src={iconPc}/>
           Leonardo Moura
        </h2>
      </header>
    </>
  )
}