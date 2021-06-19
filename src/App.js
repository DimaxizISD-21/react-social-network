import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import './App.css';

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Switch>
            <Route exact path='/' component={Profile}/>
            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/messages' component={Dialogs}/>
            <Route exact path='/news' component={News}/>
            <Route exact path='/music' component={Music}/>
            <Route exact path='/settings' component={Settings}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
