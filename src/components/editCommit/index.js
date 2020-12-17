import React from 'react';
import './style.css'

export default function EditCommit(){
  function editaComentario(){
    const id = document.getElementById('idComment').getAttribute('value');
    const div = document.getElementById(`${id}`);
   const botao = document.createElement('button')
   botao.append('Salvar')
   botao.setAttribute('value', 'salvar')
      div.appendChild(botao)
    
  }

  return(
    <>
    <button className="editComment" onClick={editaComentario}>Editar</button>
    </>
  )
}