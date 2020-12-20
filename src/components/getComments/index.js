import React, { useState, useEffect} from 'react';
import api from '../../services/Api';
import ButtonDelete from '../buttonDetele';
import './style.css';
import ButtonEditComment from '../editCommit';



export default function GetComments(){
  const [commets, setComments] = useState([]);
  const [pageNumber, setPage] = useState(1);

  useEffect(()=>{
      buscaComentarios(pageNumber)
      setPage(pageNumber)
  },[]);

 async function buscaComentarios(pageNumber){
      const response = await api.get(`/all?page=${pageNumber}`);
      const total = response.data.pages;
        if(pageNumber > total) {
          pageNumber = total;
          return;
        };
        if(pageNumber < 1){
          pageNumber = 1;
          return;
        }  
      console.log(pageNumber)
        setComments(response.data.docs);
        setPage(pageNumber); 
  }

  return(
    <div className="getComments">
     <section className="commentstab">
        <fieldset>
          <legend>&nbsp; Mural de comentários &nbsp;</legend>
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
             <div className="botoesPaginacao">
               <button  className="botao pagAnt"onClick={()=>backPage(pageNumber)}>◄</button>
                <span>{pageNumber}</span>
               <button className="botao proxPag" onClick={()=>proxPage(pageNumber)}>►</button>
             </div>
               
              </div>
          </fieldset>
      </section>
    </div>
  )
  function proxPage(props){
    props++
    buscaComentarios(props);
  }

  function backPage(props){
    props --;
    buscaComentarios(props);  
  }
 
}