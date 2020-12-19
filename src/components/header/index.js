import React, {useState} from 'react';
import './styles.css';
import Home from './Home'

export default function Header(){
 
  return(
    <>
      <header className="header">
        <h2>
          <Home />
         
        </h2>
      </header>
    </>
  )
}