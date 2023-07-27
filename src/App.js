import React, { useState } from 'react';
import './App.css';

const PortfolioItem = ({ title, description, imageUrl }) => {
  return (
    <div className="portfolio-item">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <img src="pencil-revision-svgrepo-com.svg" width="24" height="24" />
        <h4>Eunjee Portfolio</h4>
        <button className="menu-button" onClick={handleMenuToggle}>
          메뉴
        </button>
      </header>
      <main className="App-main">
        <div className="main-content">
          {/* Your main content goes here */}
          <div className='introduce'>
            <div className='bar'></div>
            <h1>&nbsp;김은지</h1>
            <h2>(Eunjee Kim)</h2>
          </div>
          <p>
          내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리
          내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리
          내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리
          내용들어갈자리내용들어갈자리ㅍ내용들어갈자리내용들어갈자리내용들어갈자리
          내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리
          내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리내용들어갈자리
          </p>
        </div>
      </main>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} My Portfolio</p>
      </footer>
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>메뉴 항목 1</li>
          <li>메뉴 항목 2</li>
          <li>메뉴 항목 3</li>
        </ul>
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="">
//       <header className="">
//         <img src="pencil-revision-svgrepo-com.svg" width="24" height="24" />        
//       </header>
//     </div>
//   );
// }

// export default App;
