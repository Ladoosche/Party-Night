import { TRIVIA_QUESTIONS } from './src/data/triviaQuestions';
const uniqueAnswers = Array.from(new Set(TRIVIA_QUESTIONS.map(q => q.answer_en)));
console.log(JSON.stringify(uniqueAnswers, null, 2));
