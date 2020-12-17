import React, { useState, useEffect} from 'react';
import api from '../../services/Api';
import ButtonDelete from '../buttonDetele';
import './style.css';
import ButtonEditComment from '../editCommit';


export default function GetComments(){
  const [commets, setComments] = useState([]);

  useEffect(()=>{
      api.get('all').then( response =>{
      setComments(response.data.docs);
      })
  },[commets]);

  return(
    <div className="getComments">
     <section className="commentstab">
        <fieldset>
          <legend>&nbsp; Aqui jaz os comentários da api &nbsp;</legend>
              <div className="data">
                  {commets.map(comment =>
                  <fieldset key={comment._id} className="fildsetCommentUnique" > 
                      <legend className="identificadorNome">&nbsp;{comment.name}&nbsp;</legend> 
                      <div className="botoes" id="botoes">
                            <label className="identificadorComentario">Comentário:</label>
                            <span>
                                <ButtonEditComment  idComment={comment._id}/>
                                <ButtonDelete idComment={comment._id}/>
                              </span>
                      </div>
                      <div className="identificadorComentario">
                          <div className="comment" id={comment._id} value={comment.comment}>
                            {comment.comment}                            
                          </div>
                      </div>
                  </fieldset>   
                )}
              </div>
          </fieldset>
      </section>
    </div>
  )

 
}