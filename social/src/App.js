import React from "react";
import './App.css';
import Logo from '../src/logo.svg';


const App = () => {
  return (
    <div className="App">

        <div className="fixed-sidebar">
            <div className="fixed-sidebar-left sidebar--small" id="sidebar-left">

                <a href="/" className="logo">
                    <div className="img-wrap">
                        <img src={Logo} alt="React" width="80px;" />
                    </div>
                </a>


                <ul className="left-menu">
                    <li>
                        <a href="#">Profile</a>
                    </li>
                    <li>
                        <a href="#">Messages</a>
                    </li>
                    <li>
                        <a href="#">News</a>
                    </li>
                    <li>
                        <a href="#">Music</a>
                    </li>

                </ul>
            </div>

        </div>

        <header className="header" id="site-header">
            <div className="container">
                <div className="page-title">
                    <h6>Profile Page</h6>
                </div>


                <div className="author-page author vcard inline-items more">
                    <a href="/profile" className="author-name fn">
                        <div className="author-title">
                            Alex
                        </div>
                        <span className="author-subtitle">REACT COWBOY</span>
                    </a>
                </div>
            </div>
        </header>
        <div className="container">
            <div className="content">
                <div className="top-header-thumb">
                    <img src='https://webmandry.com/wp-content/uploads/2013/10/2013_10_962_03.jpg' />
                </div>
                <div className="profile--content">
                    <p>Start Profile Page</p>
                </div>
            </div>
        </div>
        <footer className="footer" id="site-footer">
            <div className="container">
                <div className="page-title">
                    <h6>WebArcticFox</h6>
                </div>
            </div>
        </footer>
    </div>
  );
}

export default App;
