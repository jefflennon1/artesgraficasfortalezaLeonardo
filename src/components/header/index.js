import React, {useState} from 'react';

export default function Header(){
  const [pessoas, setPessoa] = useState(['jefferson', 'camila']);
  
  function addPessoas(){
    setPessoa([... pessoas, `joao ${Date.now()}`])
  }

  return(
    <>
    {pessoas.map( pessoa => <div key={pessoa} >{pessoa}</div>)}
    <button onClick={addPessoas} type="button">Adicionar</button>
    </>
  )
}