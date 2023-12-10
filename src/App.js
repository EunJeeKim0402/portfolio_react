import {Route} from 'react-router-dom';
import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import Study from './components/study/Study';
import StudyReact from './components/study/StudyReact';
import StudyCS from './components/study/StudyCS';
import StudyHTML from './components/study/StudyHTML';
import Study1_1 from './components/study/study_1/Study1_1';
import Study1_2 from './components/study/study_1/Study1_2';
import Study2_1 from './components/study/study_2/Study2_1';
import Study2_2 from './components/study/study_2/Study2_2';
import Study2_3 from './components/study/study_2/Study2_3';
import Study2_4 from './components/study/study_2/Study2_4';
import Study2_5 from './components/study/study_2/Study2_5';

function App() {
  return (
    <div className="App">
      <Header></Header>   
      
      <Route exact path='/portfolio_react' component={Main}></Route>
      <Route exact path='/career' component={Career}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>   
      <Route exact path='/study' component={Study}></Route>
      <Route exact path='/study/react' component={StudyReact}></Route>
      <Route exact path='/study/cs' component={StudyCS}></Route>
      <Route exact path='/study/html' component={StudyHTML}></Route>
      <Route exact path='/study1_1' component={Study1_1}></Route>
      <Route exact path='/study1_2' component={Study1_2}></Route>
      <Route exact path='/study2_1' component={Study2_1}></Route>
      <Route exact path='/study2_2' component={Study2_2}></Route>
      <Route exact path='/study2_3' component={Study2_3}></Route>
      <Route exact path='/study2_4' component={Study2_4}></Route>
      <Route exact path='/study2_5' component={Study2_5}></Route>

      <Footer></Footer>   
    </div>
  );
}

export default App;
