import React from 'react';
import './styles.css';
import api from '../../services/Api';

export default function ButtonDelete(idComment){
  async function deleteComment(props){
   await api.delete(`/${props}`);
  }

  return(
    <>
      <button type="button" className="delete" id={`deleteComment${idComment.idComment}`} onClick={()=> deleteComment(idComment.idComment)}>Deletar</button>
    </>
  )
}