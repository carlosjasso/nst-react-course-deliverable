import React from 'react';
import './App.css';

interface Colors {
  [name: string]: string
}

// coolors palette: https://coolors.co/cacf85-8cba80-658e9c-4d5382-514663
const backgourndColors : Colors = {
  "Dark Khaki": "#cacf85",
  "Dark Sea Green": "#8cba80",
  "Steel Teal": "#658e9c",
  "Purple Navy": "#4d5382",
  "English Violet": "#514663"
}

let backgroundColor: string;

function onStartQuickClick() {
  console.log("click!");
}

function getRandomBackgroundColor(): string {
  const colorIndex = Math.floor(Math.random() * (Object.keys(backgourndColors).length - 1) + 1);
  const colorKey = Object.keys(backgourndColors)[colorIndex];
  return backgourndColors[colorKey];
}

function App() {
  backgroundColor = getRandomBackgroundColor();

  return (
    <main className='main-container' style={{ backgroundColor: backgroundColor }}>
      <section className='container'>
        <button onClick={onStartQuickClick}>Start Quiz</button>
      </section>
    </main>
  );
}

export default App;
