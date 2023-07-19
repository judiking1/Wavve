import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <header>
        <nav>
            <div className="snb w1240">
                <ul>
                    <li>로그인</li>
                    <li>이용권</li>
                    <li>쿠폰·코인</li>
                    <li>웨이브온</li>
                    <li>이벤트</li>
                </ul>
            </div>
        </nav>
        <nav>
            <div className="gnb w1240">
                <div className="logo">
                    <Link to="/"><img src="./images/로고.svg" alt="로고"/></Link>
                </div>
                <ul className="menu">
                    <li className="currentMenu"><Link to="/">홈</Link></li>
                    <li>카테고리</li>
                    <li>LIVE</li>
                    <li>MY</li>
                </ul>
                <div className="search">
                    <i className="fas fa-search"></i>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header