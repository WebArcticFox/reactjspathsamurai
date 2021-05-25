import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";
import MessagesContainer from "./components/Messages/MessagesContainer";
import SidebarContainer from "./components/Sidebar/SidebarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";







const App = (props) => {
  return (
        <div className="App">
            <SidebarContainer />
            <Header />
            <Route path="/profile/:userId?" render={ () => <ProfileContainer /> } />
            <Route path="/users" render={ () => <UsersContainer /> } />
            <Route path="/messages" render={ () => <MessagesContainer /> } />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Footer />
        </div>
  );
}

export default App;
