import { NavLink } from 'react-router-dom';
<link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap' rel="stylesheet" />

function Header() {
    const clickStyle = {color: "red"};
    return(
        <header>
            <div className='inner'>
                <h1 className='logo'><NavLink exact to="/">Eunjee</NavLink></h1>
                <ul className="gnb">
                    <li><NavLink exact activeStyle={clickStyle} to="/Community">Community</NavLink></li>                
                    <li><NavLink exact activeStyle={clickStyle} to="/Department">Department</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/Gallery">Gallery</NavLink></li>                
                    <li><NavLink exact activeStyle={clickStyle} to="/Location">Location</NavLink></li>
                    <li><NavLink exact activeStyle={clickStyle} to="/Youtube">Youtube</NavLink></li>
                </ul>
                <NavLink exact activeStyle={clickStyle} to="/Join">Join</NavLink>
            </div>
        </header>
    )
}

export default Header;