import React from 'react';
import Header from './components/header'
import './App.css';
import Sliders from './components/sliders'
import BodySite from './components/bodySite';
import Commentstab from './components/commentsTab';
import LoadComments from './components/getComments';
import Footer from './components/footer';

export default function App(){
  return(
    <>
       <Header />
        <Sliders />
        <BodySite />
        <Commentstab />
        <LoadComments />
        <Footer />
    </>
  )
}