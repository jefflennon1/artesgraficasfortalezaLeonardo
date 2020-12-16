import React from 'react';
import './styles.css';
import api from '../../services/Api';

export default function ButtonDelete(){
  function deleteComment(){
      const id = document.getElementById('idComment').getAttribute('value');
      console.log(id);
      api.delete(`/${id}`,(response)=>{
        console.log(response);
      });
  }

  return(
    <>
      <button type="button" className="delete" onClick={deleteComment}>Deletar</button>
    </>
  )
}