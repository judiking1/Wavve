import React from 'react'
import './FooterWavveOn.css'
import { Link } from 'react-router-dom';
function FooterWavveOn() {
    const handleSelectChange = (event) => {
        const { value } = event.target;
        if(value) {
            window.location.href = value;
        }
    }
  return (
    <div className="wavveon">
        <div className="footer_logo">
        <label htmlFor="wavveon_logo">
            <img src="https://www.wavve.com/img/ico-footer-wavve-on.d4912b54.svg" alt="Wavve on"/>
        </label>
        </div>
        <select id="wavveon_logo" onChange={handleSelectChange}
        style={{backgroundImage: 'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADfSURBVDhPYxgFo4AKICMjowyIpaFcnCA3N1cGpBbKhQMmKA0H////vwTE59LT07WgQhgAJPfr16+zILVQIThghtJwcPbs2TsmJiZPgczFxsbGa4D8jxAZCEhLS5NjZGQ8AGQWz5w5cwNEFAEwDAQBoCFXgIb+BmqcCjR0OZD/DSQONEwESB1iYmLqBRo2DySGDhihNFYANKAJSHmzsLDYg/h///4FuWw70LBaEB8bwGsgCADDazowrDSBzH9AF98GGpYOkcEOMCIFHUhKSmYDqVdA/A7IzgQLjoIRDRgYAMM3S1P54/NdAAAAAElFTkSuQmCC)'}}
        >
            <option defaultValue="" disabled="disabled" hidden="hidden">사업자용 웨이브 가입</option>
            <option value="http://www.wavveon.com/Index.aspx">웨이브온 서비스 소개</option>
            <option value="http://www.wavveon.com/join_pcbang.aspx">웨이브온 PC방 서비스</option>
            <option value="http://www.wavveon.com/join_library.aspx">웨이브온 도서관 서비스</option>
            <option value="http://www.wavveon.com/join_hospital.aspx">웨이브온 병원 서비스</option>
            <option value="http://www.wavveon.com/join_movienet.aspx">웨이브온 숙박 서비스</option>
            <option value="http://www.wavveon.com/join_others.aspx">웨이브온 일반 서비스</option>
        </select>
        <div className="footer_sns">
        <Link
            to="https://www.facebook.com/wavve.official/"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTCcnJyYmJiUlJScnJyYmJiYmJiUlJScnJy4uLiUlJVVVVf///ysrKyYmJiYmJiUlJSUlJf///zMzM+bm5rm5uUlJSTw8PJOTk8fHx6Ojo/Dw8GlpaSKgx6gAAAARdFJOUwA3jtT6yH/sXRCpAwEe33P+GdQUZQAAAatJREFUWMOtl9mWwiAMhil7Udumi6067/+cU3EZdSCB4n/Vczz5TEICCWMR1VY71RgpTaOctjXLUsVFBy/qoBO8SrWuWwFBiTbFj1obiMpoCrG3iLlH2D1mf1BASh2Q3BlIkIlm00pIkrRB8x2HZPFdwN5Bhtx/Aocs8c//t5CpjzxUMhcg387iYCBb5qUe9go2SP3VpIVNeqahxgMYjlcNgSAenaUx62XsvZbAj5p2YL6bhwF3F1rEgVOPAaD1ABG3/+lxgPA1hDgw3a0vl0sQABXRBLcMnAe0JZAIpLcfkX9YY6g75Aw94IQAuhqtwgSAxauIBKy15Mo8cCzWiMu46naI168xcmEo1kQA5/5NsaNomEkDxOIwTKYBzrFSSQUsUUAshGGe5+PN+/VrltEQGvIYJ6wOGqbKACqhkFCASyjlCS9lWwawCe084e2MXSg0QOBXGg3g+KVKAyr8WicBgnhYSEBLPG0U4PG66q0ATT7v/mGfKQfKB4zyEad4yCof8zakwX551P3CsF087pcvHKsPpStP+dJVvvaVL55fWH2DyzdkLd956/8vx6XV0bOYnOQAAAAASUVORK5CYII="
                alt="Wavve 페이스북" width="32" height="32"/>
        </Link>
        <Link
            to="http://m.post.naver.com/my.nhn?memberNo=12375258"
            target="_blank"
            rel="noopener noreferrer">
            <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUdwTCYmJicnJyUlJSYmJicnJyYmJiUlJS0tLSYmJiYmJigoKCUlJSUlJf7+/iUlJbm5ufHx8VtbW3h4eOTk5DIyMikpKZ+fn0VFRczMzO6Le3EAAAAOdFJOUwCON9T5YcjsFHvfU6WxjM/C1AAAAa5JREFUWMOtl+uSgyAMhRGRi1qj2Gp9/xdd7bqtFxJw0/OjM52RzyQcJBECka1crUujlCl17SorLklmORyUZzJ1tXWn1SvD2aTlBlCZOKIglr8QBf16DVFpIghpIEEGrWahIEkKSSODZGWh9Te4oBvr/cEYCrioQx2kugpQu72wBi7LbP1w8k8T0MlRVAFSAJ8yBBJIAryTcPA/ADi8gmmANYRAACug67r1JwxYQ8gxQAvwuDc9QIsB8peHgAAMngSAxA7BHwBgJAEZksEGMHgKMOdggQL4YfmHA8CKigT0YwRQBTdxA2g8DXCijgDuDxJQC40D4kZajmRJAGJWnlUKwwMYoXgAxQewUyiBpVJoHkAjRmrPGbSIkcJWnj8kBy2ODFo5fJjAHwEekMNkkeTG/foRecwiH5RZ03b9NCCNG3GvP7sN4Enc8pKzixL7rCcqRy+WfR2xCq4XC94cTHQF37crGsKvnRALfS5XIoRlJ7pnvEfBOyyPWnDfZ+FHsu+Jg5jUZA1DNIFvtHn8RpPf6vKbbX67zx84+CMPf+jij31fGDz5o+8Xhu9r4/8P6gi556iJuXoAAAAASUVORK5CYII="
                alt="Wavve 네이버 포스트" width="32" height="32"/>
        </Link>
        </div>
    </div>
  )
}

export default FooterWavveOn