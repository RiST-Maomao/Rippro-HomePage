// src/App.jsx
import React from 'react';
import Navigator from './components/Navigator';
import Home from './Pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigator />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;