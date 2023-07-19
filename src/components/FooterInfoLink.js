import React from 'react'
import { Link } from 'react-router-dom'
import './FooterInfoLink.css'
function FooterInfoLink() {
  return (
    <div className="info_link">
        <ul>
            <li><Link to="#">회사소개</Link></li>
            <li><Link to="#">인재채용</Link></li>
            <li><Link to="#">서비스 소개</Link></li>
            <li><Link to="#">이용약관</Link></li>
            <li><Link to="#">개인정보 처리방침</Link></li>
            <li><Link to="#">고객센터</Link></li>
        </ul>
  </div>
  )
}

export default FooterInfoLink