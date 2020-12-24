import React from 'react';
import Hapvida from './images/hapvida.png';
import Embracon from './images/embracon.png';
import Auge from './images/auge.png';
import Unimaq from './images/unimaq.png';
import NossaMoto from './images/nossaMoto.png';
import Unimed from './images/unimed.png';
import './style.css'


export default function Clientes(){
  return(
    <>
      <div className="clients">
        <label htmlFor="" className="labelMarcas">Marcas que confiam no meu trabalho:</label>
        <img src={Hapvida} alt="Hapvida"  className="clientes hapvida"/>
        <img src={Embracon} alt="Embracon" className="clientes embracon"/> 
        <img src={Auge} alt="Auge Motos"  className="clientes  auge"/>
        <img src={Unimaq} alt="Unimaq" className="clientes  unimaq"/>    
        <img src={NossaMoto} alt="Nossa moto" className="clientes nossa"/> 
        <img src={Unimed} alt="Unimed" className="clientes  unimed"/>     
      </div>
    </>
  )
}