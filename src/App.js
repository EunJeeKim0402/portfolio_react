import {Route} from 'react-router-dom';
import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import Study from './components/Study';
import StudyReact from './components/StudyReact';
import StudyCS from './components/StudyCS';
import StudyHTML from './components/StudyHTML';

function App() {
  return (
    <div className="App">
      <Header></Header>   
      
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/career' component={Career}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>   
      <Route exact path='/study' component={Study}></Route>
      <Route exact path='/study/react' component={StudyReact}></Route>
      <Route exact path='/study/cs' component={StudyCS}></Route>
      <Route exact path='/study/html' component={StudyHTML}></Route>

      <Footer></Footer>   
    </div>
  );
}

export default App;
