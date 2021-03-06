// Caching selectors into variables
const container       = document.querySelector('.container'),
   currentQuestion    = document.querySelector('.current-question'),
   totalQuestion      = document.querySelector('.total-question'),
   question           = document.querySelector('.question'),
	optionOne          = document.querySelector('.option-1'),
	optionTwo          = document.querySelector('.option-2'),
	optionThree        = document.querySelector('.option-3'),
	optionFour         = document.querySelector('.option-4'),
	options            = document.querySelectorAll('li'),
   btn                = document.querySelector('.btn');
   

let currentScore        = document.querySelector('.current-score'),
   activeQuestion       = 1;
   score                = 0;


// Questions
const questions = [
	{
		question: 'What is Node.JS?',
		options: [
			'Node.js is a web server.',
			'Node.js is a JavaScript framework',
			"Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine.",
			'None of the above',
      ],
      answer: "Node.js is a JavaScript based framework/platform built on Google Chrome's JavaScript V8 Engine."
	},
	{
		question: 'Which of the following command will show version of npm?',
		options: [
			'$ npm --version.',
			'$ node --version.',
			'$ npm getVersion.',
			'$ node getVersion.',
      ],
      answer: '$ npm --version.',
	},
	{
		question: 'Which of the following command will show the information about the memory of your system?',
		options: [
			'console.log(\'total memory : \' + os.totalMem() + " bytes.");',
			'console.log(\'total memory : \' + os.totalMemory() + " bytes.");',
			'console.log(\'total memory : \' + os.getTotalMemory() + " bytes.");',
			'None of the above.',
      ],
      answer: 'console.log(\'total memory : \' + os.totalMem() + " bytes.");'
	},
	{
		question:
			'Which of the following module do you need for cryptographic functionality?',
      options: ['cryptic', 'cryptography', 'cryptoc', 'crypto'],
      answer: 'crypto'
	},

	{
		question:
			'Where are captured values populated regarding route parameters?',
		options: [
			'req.locals object',
			'req.params object',
			'req.parameters object',
			'req.paras object',
      ],
      answer: 'req.params object',
	},
];


// Change text content
const showContent = () => {
   currentQuestion.textContent = activeQuestion;
   totalQuestion.textContent = questions.length;
   currentScore.textContent = score;
   question.textContent = questions[activeQuestion - 1].question;
   optionOne.textContent = questions[activeQuestion - 1].options[0];
   optionTwo.textContent = questions[activeQuestion - 1].options[1];
   optionThree.textContent = questions[activeQuestion - 1].options[2];
   optionFour.textContent = questions[activeQuestion - 1].options[3];
}

showContent();

// Show result
const showResult = () => {
   container.classList.add('result', 'blue');
   const result = (score / questions.length) * 100;
   let remark;
   if (result < 50) {
      remark = 'You should probably join the next startng program to learn NodeJS.';
   } else if (result <= 75){
      remark = 'Not bad, you can do better. Try and practice more often.';
   } else if (result <= 90) {
      remark = 'Almost, Very Good!'
   } else {
      remark = 'Perfecto!';
   }
   container.innerHTML =`
   <h1>${result}%</h1> 
   <h3 class="center mb">${remark}</h3>
   <a href="index.html" class="btn">Want to try again?</a>
   `;
}

const disableBtn = () => {
   options.forEach(option => {
      option.classList.add('disabled');
      if (option.textContent === questions[activeQuestion - 1].answer){
         option.classList.add('correct');
      }
   })
}

const checkOptionOne = () => {

   if (optionOne.textContent === questions[activeQuestion - 1].answer) {
      optionOne.classList.add('correct');
      score++;
      showContent();

   } else {
      optionOne.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');
   
    if (activeQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
   
}

const checkOptionTwo = () => {
   if (optionTwo.textContent === questions[activeQuestion - 1].answer) {
      optionTwo.classList.add('correct');
      score++;
      showContent();

   } else {
      optionTwo.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');

    if (activeQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
}

const checkOptionThree = () => {
   
   if (optionThree.textContent === questions[activeQuestion - 1].answer) {
      optionThree.classList.add('correct');
      score++;
      showContent();

   } else {
      optionThree.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');

    if (activeQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
   
}

const checkOptionFour = () => {
   
   if (optionFour.textContent === questions[activeQuestion - 1].answer) {
      optionFour.classList.add('correct');
      score++;
      showContent();

   } else {
      optionFour.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');

    if (activeQuestion === questions.length) {
      btn.textContent = 'Submit';
   }
}

const nextQuestion = () => {
   if (activeQuestion < questions.length) {
      activeQuestion = activeQuestion + 1;
      showContent();
      btn.classList.remove('show');
      options.forEach(option => {
         option.classList.remove('wrong', 'correct', 'disabled');
      })
   } else {
      showResult();
   }
}

// add event listener on all four options
optionOne.addEventListener('click', checkOptionOne);
optionTwo.addEventListener('click', checkOptionTwo);
optionThree.addEventListener('click', checkOptionThree);
optionFour.addEventListener('click', checkOptionFour);
btn.addEventListener('click', nextQuestion);