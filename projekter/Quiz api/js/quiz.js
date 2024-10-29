const API_URL = ('https://opentdb.com/api.php?amount=1&category=10&difficulty=easy&type=multiple');
 
const questionElement = document.querySelector('.quiz__quetion');
const buttonElements = document.querySelectorAll('.quiz__button');
 
const response = await fetch(API_URL);
const quizData = await response.json();
 
function showNextQuestion() {
    const allAnswers = [...quizData.results[0].incorrect_answers]; 
    const correctAnswer = quizData.results[0].correct_answer;
 
    allAnswers.push(correctAnswer); 
 
    allAnswers.sort(() => Math.random() - 0.5);
 
    questionElement.innerHTML = quizData.results[0].question;
 
    buttonElements.forEach(button => {
        button.innerHTML = allAnswers.shift(); 
        button.addEventListener('click', () => {
            if (correctAnswer === button.innerHTML) {
                alert('Correct!');
            } else {
                alert('Wrong!');
            }
        });
    });
}
 
showNextQuestion();