import React, {useState, useEffect} from 'react';
import api from '../../services/Api';

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
          console.log(newComment);
          // commets.includes(newComment, )
          setComments([ ... comments, newComment]);
    }

  return(
    <>
      <button type="button" onClick={addNewComment} id="buttonAdd" >Adcionares</button>
    </>
  )
}