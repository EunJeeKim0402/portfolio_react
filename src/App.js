import {Route} from 'react-router-dom';
import Header from './common/Header';
import Footer from './common/Footer';
import Main from './components/Main';
import Community from './components/Community';
import Department from './components/Department';
import Gallery from './components/Gallery';
import Join from './components/Join';
import Location from './components/Location';
import Youtube from './components/Youtube';

function App() {
  return (
    <div className="App">
      <Header></Header>   
      
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/Community' component={Community}></Route>
      <Route exact path='/Department' component={Department}></Route>
      <Route exact path='/Gallery' component={Gallery}></Route>
      <Route exact path='/Join' component={Join}></Route>
      <Route exact path='/Location' component={Location}></Route>
      <Route exact path='/Youtube' component={Youtube}></Route>      

      <Footer></Footer>   
    </div>
  );
}

export default App;
