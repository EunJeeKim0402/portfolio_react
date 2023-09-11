import { NavLink } from 'react-router-dom';

function StudyCategory() {
    return(
        <>
            <aside>
                <NavLink to="/study" className="studyLink">Study board</NavLink>
                <ul className="category">
                    <li className="tit">CATEGORY</li>
                    <li className="item">
                        <span>R</span>                    
                        <NavLink to="/study/react" className="categoryLink">React</NavLink>
                    </li>
                    <li className="item">
                        <span>C</span>
                        <NavLink to="/study/cs" className="categoryLink">Computer Science</NavLink>
                    </li>
                    <li className="item">
                        <span>H</span>
                        <NavLink to="/study/html" className="categoryLink">HTML/CSS</NavLink>
                    </li>
                </ul>
            </aside>
        </>
    )
}

export default StudyCategory;