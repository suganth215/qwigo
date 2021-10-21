// import { Switch } from 'react-router';
import './App.css';
//import {Helmet} from 'react-helmet';
import {HashRouter , Route, Switch} from 'react-router-dom';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.css';
import About from './About';
import UserHome from './UserHome';

function App() {

  return (
    <HashRouter>
    <div className="App">
       <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/userHome">
            <UserHome/>
          </Route>          
        </Switch>
      </div>
    </div>
    </HashRouter>
  );
}

export default App;
