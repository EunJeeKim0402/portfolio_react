import {Route} from 'react-router-dom';
import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import Study from './components/Study';
import Join from './components/Join';
import Location from './components/Location';
import Youtube from './components/Youtube';

function App() {
  return (
    <div className="App">
      <Header></Header>   
      
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/career' component={Career}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>
      <Route exact path='/youtube' component={Youtube}></Route>      
      <Route exact path='/study' component={Study}></Route>
      <Route exact path='/location' component={Location}></Route>
      <Route exact path='/join' component={Join}></Route>

      <Footer></Footer>   
    </div>
  );
}

export default App;
