import React, { useState, useEffect} from 'react';
import api from '../../services/Api';

export default function GetComments(){
  const [commets, setComments] = useState(['jefferson', 'camila']);
      
  function createComment(){
      setComments([... commets, `new comment ${Date.now()}`]);
      console.log(commets);
  }

  return(
    <div className="getComments">
      <label htmlFor="">Aqui jaz os comentários da api</label>
          {commets.map( comment => <label> {comment} </label>)}
      <button type="button" onClick={createComment}>Adiconar</button>
    </div>
  )
}