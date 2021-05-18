import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
  return (
      <BrowserRouter>
        <div className="App">
            <Sidebar state={props.state.sideBar} />
            <Header />
            <Route path="/profile" render={ () => <Profile state={props.state.profilePage} /> } />
            <Route path="/messages" render={ () => <Messages state={props.state.messagesPage} /> } />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
