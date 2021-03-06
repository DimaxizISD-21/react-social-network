import {Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import Users from "./components/Users/Users";
import Login from "./components/Login/Login";

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Switch>
          <Route exact path='/' render={() => <Profile />}/>
          <Route path='/profile/:userId?' render={() => <Profile />}/>
          <Route path='/messages' render={() => <Dialogs />}/>
          <Route exact path='/users' component={Users} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/news' component={News}/>
          <Route exact path='/music' component={Music}/>
          <Route exact path='/settings' component={Settings}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
