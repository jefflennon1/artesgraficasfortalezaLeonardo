import React from 'react';
import Header from './components/header'
import './App.css';
import Sliders from './components/sliders'
import BodySite from './components/bodySite'

export default function App(){
  return(
    <>
       <Header />
        <Sliders />
        <BodySite />
    </>
  )
}