import React from 'react'
import './Footer.css'
import FooterInfoLink from './FooterInfoLink';
import FooterInfoArea from './FooterInfoArea';
import FooterWavveOn from './FooterWavveOn';
function Footer() {

  return (
    <footer>
      <div className="footer_container w1240">
        <FooterInfoLink/>
        <FooterInfoArea/>
        <FooterWavveOn/>
      </div>
    </footer>
  )
}

export default Footer