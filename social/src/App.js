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
            <Sidebar />
            <Header />
            <Route path="/profile" render={ () => <Profile PostArray={props.PostArray} /> } />
            <Route path="/messages" render={ () => <Messages MessagesUsers={props.MessagesUsers} MessagesArray={props.MessagesArray} /> } />
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
