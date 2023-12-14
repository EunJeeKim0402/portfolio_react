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

import Study3_1 from './components/study/study_3/Study3_1';
import Study3_2 from './components/study/study_3/Study3_2';
import Study3_3 from './components/study/study_3/Study3_3';
import Study3_4 from './components/study/study_3/Study3_4';
import Study3_5 from './components/study/study_3/Study3_5';
import Study3_6 from './components/study/study_3/Study3_6';

import Study4_1 from './components/study/study_4/Study4_1';
import Study4_2 from './components/study/study_4/Study4_2';
import Study4_3 from './components/study/study_4/Study4_3';
import Study4_4 from './components/study/study_4/Study4_4';
import Study4_5 from './components/study/study_4/Study4_5';
import Study4_6 from './components/study/study_4/Study4_6';

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
      <Route exact path='/study3_1' component={Study3_1}></Route>
      <Route exact path='/study3_2' component={Study3_2}></Route>
      <Route exact path='/study3_3' component={Study3_3}></Route>
      <Route exact path='/study3_4' component={Study3_4}></Route>
      <Route exact path='/study3_5' component={Study3_5}></Route>
      <Route exact path='/study3_6' component={Study3_6}></Route>
      <Route exact path='/study4_1' component={Study4_1}></Route>
      <Route exact path='/study4_2' component={Study4_2}></Route>
      <Route exact path='/study4_3' component={Study4_3}></Route>
      <Route exact path='/study4_4' component={Study4_4}></Route>
      <Route exact path='/study4_5' component={Study4_5}></Route>
      <Route exact path='/study4_6' component={Study4_6}></Route>

      <Footer></Footer>   
    </div>
  );
}

export default App;
