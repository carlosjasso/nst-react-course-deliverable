import React from 'react';
import { BackgroundColorsContext } from '../context/BackgroundColors';
import { getRandomBackgroundColor } from '../utils/RandomBackgroundColorPicker';

function onStartQuickClick() {
    console.log(process.env.REACT_APP_QUIZAPI_KEY);
}

function Home() {
    return (
        <BackgroundColorsContext.Consumer>
            {backgroundColors => 
                <main className='main-container' style={{ backgroundColor: getRandomBackgroundColor(backgroundColors) }}>
                    <section className='container'>
                        <button onClick={onStartQuickClick}>Start Quiz</button>
                    </section>
                </main>
            }
        </BackgroundColorsContext.Consumer>
    );
}

export default Home;