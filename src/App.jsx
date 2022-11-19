import { useState } from 'react'

import AppStyle from './App.module.css';

import Header from './components/Header';
import Contents from './components/Contents';
import Donation  from './donations/donationMain';
import AboutUs from './aboutus/AboutusMain';
import Banner from './Banner/Intro.png';
import AllCategories from './allCategories/categoryMain';
import AdoptMain from './adopt/adopMain';
import Community from './community/communityMain';

import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className={AppStyle.wrapper}>
        <Header/>
        {/* < img src={Banner} alt="banner" className={AppStyle.Banner} /> */}
          
        <Routes>
          <Route path="/" element={<Contents/>}/>
          <Route path='/donation' element={<Donation/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
          <Route path='/allCategories' element={<AllCategories/>}/>
          <Route path='/adopt' element={<AdoptMain/>}/>
          <Route path='/community' element={<Community/>}/>
          </Routes>
          
      </div>
    </BrowserRouter>
  )
}

export default App
