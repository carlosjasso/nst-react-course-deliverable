import { FormEvent, useState } from "react";
import { Navigate, useLocation, useNavigate, useParams } from "react-router-dom";
import Layout from "./Layout";
import "../styles/Question.css"
import { getRandomBackgroundColor } from "../utils/BackgroundColors";
import { Question as QuestionType } from '../types/Questions';

function Question() {
    const { questionID } = useParams();
    const questionIndex = parseInt(questionID || "0") - 1;
    const { state } = useLocation();
    const questions = state as QuestionType[];
    const navigate = useNavigate();
    const [selectedAnswer, SetSelectedAnswer] = useState("");

    if (!questions || questions.length === 0 || questionIndex < 0 || !questions[questionIndex]) {
        return (<Navigate to="/" replace />);
    }

    const question = questions[questionIndex];
    const clauses = Object.keys(question.answers)
        .filter((clause: string) => question.answers[clause]);

    const isQuestionLast = questionIndex < (questions.length - 1);

    return (
        <Layout backgroundColor={getRandomBackgroundColor()} >
            <section className="container">
                <form onSubmit={ (e: FormEvent<HTMLFormElement>) => {
                    e.preventDefault();
                    const nextPath = isQuestionLast ? `/${parseInt(questionID || "0") + 1}` : "/finish";
                    SetSelectedAnswer("");
                    navigate(nextPath, { replace: true, state: questions });
                } }>
                    <p>{questionID}/{questions.length} - {question.question}</p>
                    {clauses.map((clause: string, index: number) => 
                        <label key={index}>
                            <input type={"radio"} checked={selectedAnswer === clause} onChange={() => {
                                SetSelectedAnswer(clause);
                                question.isAnswerCorrect = question.correctAnswers[`${clause}_correct`];
                            }} />
                            {question.answers[clause]}
                        </label>
                    )}
                    <div className="filler" />
                    <button disabled={!selectedAnswer}>{isQuestionLast ? "Next" : "Finish"}</button>
                </form>
            </section>
        </Layout>
    );
}

export default Question;