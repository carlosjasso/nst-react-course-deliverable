import { useState } from 'react';
import Axios from 'axios';
import '../styles/Start.css';
import { getRandomBackgroundColor } from '../utils/BackgroundColors';
import Layout from './Layout';
import { Question } from '../types/Questions';
import { Navigate } from 'react-router-dom';

interface QuizButtonState {
    text: string
    disabled: boolean,
}

const apiRequestConfiguration = {
    params: {
        apiKey: process.env.REACT_APP_QUIZAPI_KEY,
        limit: 10,
        category: "Linux"
    }
}

function onStartQuizClick(setQuizButtonState: Function, setQuestions: Function) {
    setQuizButtonState({
        text: "Loading...",
        disabled: true
    } as QuizButtonState);

    Axios.get("https://quizapi.io/api/v1/questions", apiRequestConfiguration)
    .then(res => {
        const questions: Question[] = (res.data as Array<any>).map(q => {
            return { 
                question: q.question, 
                answers: q.answers, 
                correctAnswers: q.correct_answers,
                isAnswerCorrect: null
            } as Question
        });
        
        setQuestions(questions);
    })
    .catch(error => console.error(error));
}

function Start() {
    const [quizButtonState, setQuizButtonState] = useState({
        text: "Start Quiz",
        disabled: false
    } as QuizButtonState);

    const [questions, setQuestions] = useState(null);

    return (
        <Layout backgroundColor={ getRandomBackgroundColor() }>
            <section>
                <button 
                    disabled={ quizButtonState.disabled } 
                    onClick={ () => onStartQuizClick(setQuizButtonState, setQuestions) }
                    >
                        { quizButtonState.text }
                </button>
            </section>
            {questions && (
                <Navigate to="/1" state={ questions } />
            )}
        </Layout>
    );
}

export default Start;