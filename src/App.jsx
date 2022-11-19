import { useState } from 'react'

import AppStyle from './App.module.css';

import Header from './components/Header';
import Contents from './components/Contents';
import Donation  from './donations/donationMain';
import Banner from './Banner/Intro.png';
import Aboutus from './AboutUs.png'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className={AppStyle.wrapper}>
        <Header/>
        < img src={Banner} alt="banner" className={AppStyle.Banner} />
          
        <Routes>
          <Route path="/" element={<Contents/>}/>
          {/* <Route path="/" element={ */}
             {/* <div className={AppStyle.wrapper}> */}
               {/* <Header /> */}
              {/* <Contents/> */}
            {/* </div> */}
          {/* }/> */}
          <Route path='/donation' element={<Donation/>}/>
          {/* <Route path='/AboutUs' element={<img src={Aboutus} />}/> */}
          </Routes>
          
      </div>
    </BrowserRouter>
  )
}

export default App
