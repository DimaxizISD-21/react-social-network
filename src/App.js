import {Switch, Route} from "react-router-dom";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

import './App.css';

function App({ state, addPost, updateNewPostText }) {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navbar state={state.sidebarFriends}/>
      <div className="app-wrapper-content">
        <Switch>
          <Route exact path='/' render={() => <Profile state={state.profilePage} addPost={addPost}
                                                       updateNewPostText={updateNewPostText}/>}/>
          <Route exact path='/profile' render={() => <Profile state={state.profilePage} addPost={addPost}
                                                              updateNewPostText={updateNewPostText}/>}/>}/>
          <Route path='/messages' render={() => <Dialogs state={state.dialogsPage}/>}/>
          <Route exact path='/news' component={News}/>
          <Route exact path='/music' component={Music}/>
          <Route exact path='/settings' component={Settings}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
