import { useRef } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    const clickStyle = {color: "red"};
    const line = useRef(null);

    function lineMove(e) {
        // 마우스 올릴 때 요소의 left, top 위치값
        let elLeft = e.target.getBoundingClientRect().left;
        let elTop = e.target.getBoundingClientRect().top;
        // 부모의 left, top좌표를 구함
        let parentLeft = e.target.closest('.gnb').getBoundingClientRect().left;
        let parentTop = e.target.closest('.gnb').getBoundingClientRect().top;
        // 부모와 해당 요소의 left, top을 뺌
        let moveLeft = elLeft - parentLeft;
        let moveTop = elTop - parentTop;
        // 짝대기에 위치값 대입
        line.current.style.left = moveLeft + 'px';
        line.current.style.top = moveTop + 30 + 'px';
        // 짝대기 넓이를 해당 요소 크기만큼 변경
        // 마우스 올린 해당 요소의 넓이 구하기
        
    }

    return(
        <header>
            <div className='inner'>
                <h1 className="logo"><NavLink exact to="/">Eunjee</NavLink></h1>
                <ul className="gnb">
                    <li className="line"></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/department">Department</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/community">Community</NavLink></li>                
                    <li><NavLink exact activeStyle={clickStyle} to="/gallery">Gallery</NavLink></li>                
                    <li><NavLink exact activeStyle={clickStyle} to="/youtube">Youtube</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/location">Location</NavLink></li>
                </ul>
                <NavLink className="join" exact activeStyle={clickStyle} to="/Join">
                    Join&nbsp;<i className="fa-solid fa-chevron-right"></i>           
                </NavLink>
                <div className='totalMenuBtn'></div>
                <ul className='totalMenuConts'>
                    <li><NavLink exact activeStyle={clickStyle} to="/department">Department</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/community">Community</NavLink></li>                
                    <li><NavLink exact activeStyle={clickStyle} to="/gallery">Gallery</NavLink></li>                
                    <li><NavLink exact activeStyle={clickStyle} to="/youtube">Youtube</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/location">Location</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/join">Join</NavLink></li>
                </ul>                
            </div>
        </header>
    )
}

export default Header;