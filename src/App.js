import React from 'react';
import './App.css';
import Navbar from './Navbar';
import MapSection from './MapSection';
import Sidebar from './Sidebar';
import InfoPanel from './InfoPanel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Sidebar />
        <MapSection />
        <InfoPanel />
      </div>
    </div>
  );
}

export default App;
