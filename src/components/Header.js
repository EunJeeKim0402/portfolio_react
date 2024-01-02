import { useState } from 'react';
import React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const clickStyle = { color: "#2bae29" };
    const clickStyle1 = { color: "#2bae29", border: "solid 1px #2bae29" };
    const header = useRef(null);
    const logo = useRef(null);
    const gnb = useRef(null);
    const mobileBtn = useRef(null);
    const line = useRef(null);

    function lineMove(e) {

        line.current.classList.add('on');

        // 마우스 올릴 때 요소의 left, top 위치값
        let elLeft = e.target.getBoundingClientRect().left;
        let elTop = e.target.getBoundingClientRect().top;

        // 부모의 left, top좌표를 구함
        let parentLeft = e.target.closest('.gnb').getBoundingClientRect().left;
        let parentTop = e.target.closest('.gnb').getBoundingClientRect().top;

        // 부모와 해당 요소의 left, top을 뺌
        let moveLeft = elLeft - parentLeft;
        let moveTop = elTop - parentTop;

        // 짝대기 넓이를 해당 요소 크기만큼 변경
        line.current.style.left = moveLeft + 'px';
        line.current.style.top = moveTop + 30 + 'px';

        // 마우스 올린 해당 요소의 넓이 구하기
        let elwidth = e.target.getBoundingClientRect().width;

        // 짝대기 넓이에 대입
        line.current.style.width = elwidth + 'px';
    }

    function firstLoading() {
        props.setCommuFirstContsIsActive('on');
    }

    return (
        <header ref={header} className={`${props.frame}`}>
            <div className="inner">
                <h1 ref={logo} className="logo"><NavLink exact to="/portfolio_react" className="logoColor">Dev Eunjee</NavLink></h1>
                <ul ref={gnb} onMouseLeave={() => { line.current.classList.remove('on') }} className="gnb">
                    <li ref={line} className="line"></li>
                    <li><NavLink activeStyle={clickStyle} onMouseEnter={lineMove} to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink activeStyle={clickStyle} onMouseEnter={lineMove} to="/career">Career</NavLink></li>
                    <li><NavLink activeStyle={clickStyle} onMouseEnter={lineMove} to="/study">Study</NavLink></li>                
                </ul>
                <a className="join" style={isMenuOpen ? {color: "#2bae29"} : {}} href="mailto:adserina@naver.com" data-text="Contact Me">
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span>
                    <span>&nbsp;</span>
                    <span>M</span>
                    <span>e</span>
                    <span className="material-icons-round">arrow_forward_ios</span>
                </a>
            </div>
        </header>
    )
}

export default Header;