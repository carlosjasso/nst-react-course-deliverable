import React from 'react';
import './App.css';
import Home from './components/home';
import { BackgourndColors, BackgroundColorsContext } from './context/BackgroundColors';

function App() {
  return (
    <BackgroundColorsContext.Provider value={ BackgourndColors }>
      <Home />
    </BackgroundColorsContext.Provider>
  );
}

export default App;
