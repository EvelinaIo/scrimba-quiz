let questionNum = 0;
let score = 0;
let answers = [];
let target;

const questions = [
  {question: 'How many holes are on a standard bowling ball?', color: '#56c989', answerOne: '2', answerTwo: '3', answerThree: '5', answerFour: '10'},
  {question: 'How did Spider-Man get his powers?', color: '#ffa300', answerOne: 'Military experiment gone awry', answerTwo: 'Born with them', answerThree: 'Woke up with them after a strange dream', answerFour: 'Bitten by a radioactive spider'},
  {question: 'Entomology is the science that studies', color: '#fc68b2', answerOne: 'Behavior of human beings', answerTwo: 'Insects', answerThree: 'The origin and history of technical and scientific terms', answerFour: 'The formation of rocks'},
  {question: 'The ozone layer restricts', color: '#6989f9', answerOne: 'Visible light', answerTwo: 'Infrared radiation', answerThree: 'X-rays and gamma rays', answerFour: 'Ultraviolet radiation'}
];
const correctAns = ['flexRadioDefault2', 'flexRadioDefault2', 'flexRadioDefault4', 'flexRadioDefault2', 'flexRadioDefault4']

const button = document.getElementById('next');
const question = document.getElementById('question');
const labels = document.getElementsByClassName('form-check-label');
const input = Array.from(document.getElementsByClassName('form-check-input'));
const fontColor = document.querySelector('.card-img-top');
const quiz = document.querySelector('.container-md');
console.log(quiz);
const questionDisplay = document.getElementById('question-num');
const main = document.querySelector('.quiz');

const getResult = (arr1, arr2) => {
  for(let j=0; j<arr1.length; j++) {
    if(arr1[j] == arr2[j]) {
      score +=1;
    }
  }
  console.log(score);
  return score;
}

const updateUI = (num, element) => {
  quiz.remove();
  button.remove();

  const fragment = document.createDocumentFragment();
  const result = document.createElement('div');
  result.innerHTML = `You scored:<br>${num} out of 5!`;
  result.setAttribute('class', 'result');

  /* Return to homepage button */
  const returnBtn = document.createElement('div');
  returnBtn.innerHTML = `<button type="button" onclick="location.href='index.html'" class="btn btn-dark" id='return'>Take Quiz Again</button>`;
  console.log(returnBtn)
  fragment.appendChild(result);
  fragment.appendChild(returnBtn);

  main.appendChild(fragment);
}

const next = (ansArray) => {
  button.disabled = true;
  if (questionNum<questions.length) {
    question.innerHTML = `${questions[questionNum].question}`;
    fontColor.style.color = questions[questionNum].color;
    labels[0].innerHTML = `${questions[questionNum].answerOne}`;
    labels[1].innerHTML = `${questions[questionNum].answerTwo}`;
    labels[2].innerHTML = `${questions[questionNum].answerThree}`;
    labels[3].innerHTML = `${questions[questionNum].answerFour}`;
    questionDisplay.innerHTML = `${questionNum+2}-5`;
  } else if (questionNum=questions.length) {
    getResult(ansArray, correctAns);
    button.disabled = false;
    updateUI(score);
  }
  questionNum +=1;
}

quiz.addEventListener('click', (event) => {
  target = event.target;
  
  if (target.checked) {
    button.disabled = false;
  }
})

button.addEventListener('click', () => {
  console.log(`Question : ${questionNum}`)
  console.log(':: BUTTON CLICKED ::');
  for(let i=0; i<input.length; i++) {
    if(input[i].checked) {
      answers.push(input[i].id);
      console.table(`${i}: ${answers}`);
      input[i].checked = false;
    }
  }
  next(answers);
})