import React, {useState, useEffect} from 'react';
import api from '../../services/Api';
import './style.css'

export default function ButtonCreateComment(){
  const [comments, setComments] = useState([]);
  useEffect(()=>{
    api.get('all').then( response =>{
      setComments(response.data.docs);
    })
}, []);

   async function addNewComment(){
        const name = document.getElementById('name').value;
          const email = document.getElementById('email').value;
          const comment = document.getElementById('comment').value;

          const createdComment = await api.post('/',{name, email,comment});
          const newComment = createdComment.data;
          
          setComments([ ... comments, newComment]);
          
          
          document.getElementById('name').value  = "";
          document.getElementById('email').value = "";
          document.getElementById('comment').value = "";
        }

  return(
    <>
      <button type="button" onClick={addNewComment} id="buttonAdd" className="botao">Adicionar</button>
    </>
  )
}