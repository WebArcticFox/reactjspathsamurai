import React from "react";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Profile from "./components/Profile";


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
