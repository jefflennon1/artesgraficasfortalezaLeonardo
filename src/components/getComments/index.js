import React, { useState, useEffect} from 'react';
import api from '../../services/Api';
import ButtonCreateComment from '../buttonCreateComment';
import Commentstab from '../commentsTab';
import './style.css';


export default function GetComments(){
  const [commets, setComments] = useState([]);
  
  

  useEffect(()=>{
      api.get('all').then( response =>{
      setComments(response.data.docs);
      })
  }, [commets]);
  

  return(
    <div className="getComments">
     <section className="commentstab">
        <label htmlFor="">Aqui jaz os comentários da api</label>
            {commets.map(comment =>
            <div key={comment._id}> 
                <div>Nome: {comment.name}</div> 
                <div>Comentário: {comment.comment}</div>
            </div> 
                
            )}
          
      </section>
    </div>
  )
}