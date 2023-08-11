import { NavLink } from 'react-router-dom';

function Footer() {
    return(
        <footer>
            <ul className="inner">
                <li className="info">
                    <h1 className='logo'><NavLink exact to="/">Eunjee's</NavLink></h1>
                    <p>portfolio</p>
                    <div className="sns">
                        <a href="#"><i className="fa-brands fa-github"></i></a>
                        <a href="#"><i className="fa-brands fa-blogger-b"></i></a>
                        <a href="#"><i className="fa-regular fa-note-sticky"></i></a>
                    </div>
                </li>
                <li className="nav">
                    <h2>Links</h2>
                    <ul className="list">
                        <li><NavLink exact to="/portfolio">Portfolio</NavLink></li>
                        <li><NavLink exact to="/community">Community</NavLink></li>
                        <li><NavLink exact to="/gallery">Gallery</NavLink></li>
                        <li><NavLink exact to="/youtube">Youtube</NavLink></li>
                        <li><NavLink exact to="/location">Location</NavLink></li>
                        <li><NavLink exact to="/join">Join</NavLink></li>
                    </ul>
                </li>
                <li className="nav">
                    <h2>Legal</h2>
                    <ul className="list">
                        <li><NavLink exact to="/privacy">Privacy Policy</NavLink></li>
                        <li><NavLink exact to="/terms">Terms of Conditions</NavLink></li>
                        <li><NavLink exact to="/faq">Faq</NavLink></li>
                        <li><NavLink exact to="/help">Help Center</NavLink></li>
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