import React from 'react';
import Header from './components/header'
import './App.css';
import Sliders from './components/sliders'
import BodySite from './components/bodySite';
import Commentstab from './components/commentsTab'

export default function App(){
  return(
    <>
       <Header />
        <Sliders />
        <BodySite />
        <Commentstab />
    </>
  )
}