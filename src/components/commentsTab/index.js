import React from 'react';
import './style.css';


export default function Commentstab(){
  return(
    <div className="inputs">
      <div className="border">
        <input className="inputText" type="text" name="name" id="name" placeholder="Digite seu nome"></input>
        <input className="inputText" type="text" name="name" id="email" placeholder="Digite seu e-mail"></input>
        <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Digite seu comentario"></textarea>
        <button type="button" className="button">Adicionar</button>
      </div>
    </div>
  )
}