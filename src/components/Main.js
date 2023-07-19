import React from 'react'
import MainSwiper from './MainSwiper'
import SectionEditor from "./SectionEditor";
import SectionUpdate from './SectionUpdate';
import SectionTop from "./SectionTop";
function Main() {
  return (
    <main>
        <MainSwiper/>
        <SectionEditor/>
        <SectionUpdate/>
        <SectionTop/>
    </main>
  )    
}

export default Main