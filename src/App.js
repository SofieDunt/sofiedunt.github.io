import React from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Menu from "./components/menu";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Menu />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
