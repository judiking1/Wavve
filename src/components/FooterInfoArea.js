import React from 'react'
import './FooterInfoArea.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
function FooterInfoArea() {
  return (
    <div className="info_area">
        <span>콘텐츠웨이브 주식회사</span>
        <span>대표이사 이태현</span>
        <span className="last">고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및 공휴일 휴무)</span>
        <br/>
        <span>사업자등록번호 220-88-38020</span>
        <span className="last">호스팅서비스제공자 : 마이크로소프트 유한회사, 구글클라우드코리아 유한회사, 아마존웹서비시즈코리아 유한회사</span>
        <br/>
        <span>통신판매업 신고번호 : 제 2021-서울영등포-0585호</span>
        <span className="last">통신판매업 정보 공개 : <Link to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020" target="_blank" rel="noopener noreferrer" className="info-link">http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</Link></span>
        <br/>
        <address>서울특별시 영등포구 여의나루로 60 포스트타워 19층</address>
        <span className="last">전자우편주소 : <Link to="mailto:helpdesk@wavve.com">helpdesk@wavve.com</Link></span>
        <span className="copyright">Copyright© 콘텐츠웨이브(주) All rights reserved.</span>
    </div>
  )
}

export default FooterInfoArea