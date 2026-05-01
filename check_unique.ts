import { TRIVIA_QUESTIONS } from './src/data/triviaQuestions';
const unique = new Set(TRIVIA_QUESTIONS.map(q => q.en));
console.log("Unique questions:", unique.size);
