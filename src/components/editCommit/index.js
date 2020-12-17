import React, { useState} from 'react';
import './style.css';
import api from '../../services/Api'

export default function EditCommit(idComment){
  const [comments, setComments] = useState([]);

  return(
    <>
    <button className="editComment" id={`editComment${idComment.idComment}`}  onClick={()=>editaComentario(idComment)}>Editar</button>
    </>
  )
    function escondeBotoes(props){
       document.getElementById(`editComment${props}`).setAttribute('style','display: none');
       document.getElementById(`deleteComment${props}`).setAttribute('style','display: none');
    }
    function exibeBotoes(props){
      document.getElementById(`editComment${props}`).setAttribute('style','display: inline');
       document.getElementById(`deleteComment${props}`).setAttribute('style','display: inline');
    }

    
    function editaComentario(props){
      const id = props.idComment;
      const div = document.getElementById(`${id}`);
      const text = document.getElementById(`${id}`).getAttribute('value');
      div.innerText = ""
      const textarea = document.createElement('textarea');
      const buttonSave = document.createElement('button');
      escondeBotoes(id);

      buttonSave.innerText = 'Salvar';
      buttonSave.setAttribute('id', 'saveEditComment');
      textarea.setAttribute('id', 'comment');
      div.appendChild(textarea);
      div.appendChild(buttonSave)
      textarea.append(text);
      buttonSave.addEventListener('click', () => salveEdit(id, textarea.value));
  }

  async function salveEdit(id, textarea){
    const comment = await api.put(`/${id}`, { "comment": textarea});
    const commentEdit = comment.data;
    exibeBotoes(id);
    
    setComments([ ... comments, commentEdit])
}

}