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
import {BrowserRouter, Route} from "react-router-dom";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import Preloader from "./components/common/Prealoader/Preloader";
import {initializeApp} from "./redux/appReducer";
import {compose} from "redux";


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if(!this.props.initialized){
            return <Preloader />
        }
        if(!this.props.isAuth){
            return <Login/>
        }

        return (
            <div className="App">
                <SidebarContainer/>
                <HeaderContainer/>
                <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                <Route path="/users" render={() => <UsersContainer/>}/>
                <Route path="/messages" render={() => <MessagesContainer/>}/>
                <Route path="/news" component={News}/>
                <Route path="/music" component={Music}/>
                <Route path="/settings" component={Settings}/>
                <Footer/>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        initialized: state.app.initialized
    }
}

let AppContainer = compose(
    connect(mapStateToProps,{initializeApp})
)(App)

let SocialApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={props.store}>
                <AppContainer />
            </Provider>
        </BrowserRouter>
    )
}

export default SocialApp