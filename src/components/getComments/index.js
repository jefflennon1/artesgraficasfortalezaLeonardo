import React, { useState, useEffect} from 'react';
import api from '../../services/Api';
import ButtonCreateComment from '../buttonCreateComment'
import './style.css';


export default function GetComments(){
  const [commets, setComments] = useState([]);
 
  useEffect(()=>{
      api.get('all').then( response =>{
        setComments(response.data.docs);
      })
  }, []);
  
  return(
    <div className="getComments">
      <label htmlFor="">Aqui jaz os comentários da api</label>
          {commets.map(comment => 
            <label key={comment._id}> 
              {comment.name} 
            </label> 
          )}
      {/* <ButtonCreateComment /> */}
    </div>
  )
}