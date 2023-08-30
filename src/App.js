import {Route} from 'react-router-dom';
import './scss/style.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/main/Main';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import Study from './components/Study';
import Join from './components/Join';

function App() {
  return (
    <div className="App">
      <Header></Header>   
      
      <Route exact path='/' component={Main}></Route>
      <Route exact path='/career' component={Career}></Route>
      <Route exact path='/portfolio' component={Portfolio}></Route>   
      <Route exact path='/study' component={Study}></Route>
      <Route exact path='/join' component={Join}></Route>

      <Footer></Footer>   
    </div>
  );
}

export default App;
