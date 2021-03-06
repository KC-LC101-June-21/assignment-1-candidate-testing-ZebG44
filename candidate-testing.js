const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ('');
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ('Who was the first American woman in space? ');
let correctAnswer = ('Sally Ride');
let candidateAnswer = ('');
let questions = ['Who was the first American woman in space? ','True or false: 5 kilometer == 5000 meters? ','(5 + 3)/2 * 10 = ? ',"Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",'What is the minimum crew size for the ISS? ']; 
let correctAnswers = ['Sally Ride', 'true','40', 'Trajectory', '3'];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
const input = require('readline-sync');
candidateName = input.question("Candidate, please enter your first and last name: ");
console.log('');
}
console.log('');

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
const input = require('readline-sync');
for (let i = 0; i < questions.length; i++) {
  console.log(questions[i]);
   (candidateAnswer = input.question('Your Answer: '));
    (candidateAnswers.push(candidateAnswer));
console.log(`Correct Answer: ${correctAnswers[i]}`);
console.log();
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = '';
  let count = 0;
  for (let i = 0; i < correctAnswers.length; i++){
      if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
       count++;
      } 
     grade = ((count)/5) *100;
      }
  console.log(`>>> Overall Grade: ${grade}% (${count} of 5 responses correct) <<<`);
      if (count >= 4){
       console.log(`>>> Status: PASSED <<<`);
     } else {
       console.log(`>>> Status: FAILED <<<`);
     }
  return grade;
  }  
  
function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log('Welcome astronaut candidate ' + candidateName +' to your initial evaluation.');
  console.log();
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};