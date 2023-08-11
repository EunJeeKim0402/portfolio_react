import {Route} from 'react-router-dom';
import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Community from './components/Community';
import Portfolio from './components/Portfolio';
import Gallery from './components/Gallery';
import Join from './components/Join';
import Location from './components/Location';
import Youtube from './components/Youtube';

function App() {
  return (
    <div className="App">
      <Header></Header>   
      
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/community' component={Community}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>
      <Route exact path='/youtube' component={Youtube}></Route>      
      <Route exact path='/gallery' component={Gallery}></Route>
      <Route exact path='/location' component={Location}></Route>
      <Route exact path='/join' component={Join}></Route>

      <Footer></Footer>   
    </div>
  );
}

export default App;
