import { Navigate, useLocation, useNavigate } from "react-router-dom";
import "../styles/Finish.css"
import { Question } from "../types/Questions";
import { getRandomBackgroundColor } from "../utils/BackgroundColors";
import Layout from "./Layout";

function Finish() {
    const { state } = useLocation();
    const navigate = useNavigate();
    const questions = state as Question[];

    if (!questions || questions.length === 0) {
        return (<Navigate to="/" replace />);
    }

    const correctlyAnsweredQuestions = questions.filter((question: Question) => question.isAnswerCorrect === "true");

    let textResult: string;
    if (correctlyAnsweredQuestions.length == questions.length) {
        textResult = "Whoa! you did it perfect!";
    } else if (correctlyAnsweredQuestions.length > (questions.length * .7)) {
        textResult = "Not bad! you sure know your linux";
    }
    else {
        textResult = "Hummm... better luck next time.";
    }

    return (
        <Layout backgroundColor={getRandomBackgroundColor()}>
            <section className="result-container">
                <p className="text-result">{textResult}</p>
                <p>You've successfully answered {correctlyAnsweredQuestions.length} out of {questions.length} questions.</p>
                <button onClick={() => navigate("/", {replace: true})}>Start Over</button>
            </section>
        </Layout>
    );
}

export default Finish;