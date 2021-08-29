import React from 'react';
import './App.css';
import NavBar from "./components/navbar";
import Banner from "./components/banner";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
