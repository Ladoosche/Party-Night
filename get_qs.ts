import { TRIVIA_QUESTIONS } from './src/data/triviaQuestions';
const uniqueQs = Array.from(new Set(TRIVIA_QUESTIONS.map(q => q.en)));
console.log(JSON.stringify(uniqueQs, null, 2));
