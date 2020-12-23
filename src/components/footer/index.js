import React from 'react';
import './style.css'

export default function Footer(){
  return(
    <>
    <div className="footer"  id="footer">
      <table>
           <tbody>
            <tr>
                <th>Telefone</th>
            </tr>
            <tr>
                <td>(85) 9 9810-8553</td>
            </tr>
            <tr>
                <td>(85) 9 8674-7311</td>
            </tr>
           </tbody>
      </table>

      <table>
           <tbody>
            <tr>
                <th>E-mail</th>
            </tr>
            <tr>
                <td>artesgraficaleonardo@gmail.com.br</td>
            </tr>
            <tr>
              <td>jeffersonlennon1@outlook.com</td>
            </tr>
           </tbody>
      </table>  
    </div>
    </>
  )
}