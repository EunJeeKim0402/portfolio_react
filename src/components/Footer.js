import { NavLink } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <ul className="inner">
                <li className="info">
                    <h1 className='logo'><NavLink exact to="/" className="logoColor">Dev Eunjee</NavLink></h1>
                    <p>portfolio</p>
                    <div className="sns">
                    <a href="https://github.com/EunJeeKim0402"><i className="fa-brands fa-github"></i></a>
                        <a href="https://blog.naver.com/adserina"><i className="fa-brands fa-blogger-b"></i></a>
                        <a href="https://www.notion.so/Clean-Code-4b55cc0e9cea42edb8b728c9ae5e202f"><i className="fa-regular fa-note-sticky"></i></a>
                    </div>
                </li>
                <li className="nav">
                    <h2>Links</h2>
                    <ul className="list">
                        <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink exact to="/career">Career</NavLink></li>
                        <li><NavLink exact to="/study">Study</NavLink></li>
                        <li><a href="mailto:adserina@naver.com">Contact</a></li>
                    </ul>
                </li>
                <li className="contactUs">
                    <ul className="list">
                        <li>Email me at: <span><a href="mailto:adserina@naver.com">adserina@naver.com</a></span></li>
                        <li>Call me on: <span><a href="phone:010-6276-0402">010-6276-0402</a></span></li>
                    </ul>
                </li>
                <li className="copy">&copy; EunjeeKim 2023</li>
            </ul>            
        </footer>
    )
}

export default Footer;