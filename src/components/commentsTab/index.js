import React, {useEffect, useState}  from 'react';
import ButtonCreateComment from '../buttonCreateComment'
import './style.css';
import api from '../../services/Api';


export default function Commentstab(){
  const [comments, setComments] = useState([]);
    useEffect(()=>{
      api.get('all').then( response =>{
        setComments(response.data.docs);
      })
  }, [ ButtonCreateComment]);
  return(
    <div className="inputs">
      <div className="border">
        <input className="inputText  entrada" type="text" name="name" id="name" placeholder="Digite seu nome"></input>
        <input className="inputText  entrada" type="text" name="name" id="email" placeholder="Digite seu e-mail"></input>
        <textarea className="entrada " id="comment" cols="30" rows="10" placeholder="Digite seu comentario"></textarea>
        
        
        <ButtonCreateComment />
      </div>
    </div>
  )
}