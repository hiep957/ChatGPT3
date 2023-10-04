import React from 'react'

import Article from './component/article/Article'
import Brand from './component/brand/Brand'
import CTA from './component/cta/CTA'
import Feature from './component/feature/Feature'
import Navbar  from './component/navbar/Navbar'
import { Footer,Blog,Possibility,Features,WhatGPT3,Header } from './container'
// import { Article,Brand,CTA } from './component'
import './App.css'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar></Navbar>
        <Header/>
      </div>
      <Brand></Brand>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <CTA/>
      <Blog></Blog>
      <Footer></Footer>
    </div>
    
    
    
  )
}

export default App