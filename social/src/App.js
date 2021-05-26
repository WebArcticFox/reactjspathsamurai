import React from "react";
import './App.css';
import Footer from "./components/Footer/Footer";
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import Login from "./components/Login/Login";



const App = (props) => {
  return (
      <>
          <div className="App">
              <SidebarContainer />
              <HeaderContainer />
              <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
              <Route path="/users" render={ () => <UsersContainer /> } />
              <Route path="/messages" render={ () => <MessagesContainer /> } />
              <Route path="/news" component={News}/>
              <Route path="/music" component={Music}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/login" component={Login}/>
              <Footer />
          </div>

      </>
  );
}

export default App;
