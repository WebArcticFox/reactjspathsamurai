import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";
import Profile from "./components/Profile/Profile";


const App = () => {
  return (
    <div className="App">
        <Sidebar />
        <Header />
        <Profile />
        <Footer />
    </div>
  );
}

export default App;
