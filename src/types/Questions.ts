export interface Answer {
    [name: string]: string
}

export interface CorrectAnswer {
    [answerA: string]: boolean
}

export type Question = {
    question: string,
    answers: Answer,
    correctAnswers: CorrectAnswer,
    isAnswerCorrect: boolean | string | null
}