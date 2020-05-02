// Caching selectors into variables
const currentQuestion = document.querySelector('.current-question'),
	totalQuestion      = document.querySelector('.total-question'),
	question           = document.querySelector('.question'),
	options            = document.querySelectorAll('li'),
	optionOne          = document.querySelector('.option-1'),
	optionTwo          = document.querySelector('.option-2'),
	optionThree        = document.querySelector('.option-3'),
	optionFour         = document.querySelector('.option-4'),
   btn                = document.querySelector('.btn');
   

let currentScore        = document.querySelector('.current-score'),
   activeQuestion       = 1;
   score                = 0;


// Questions
const quiz = [
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
		question: 'Which of the following command will show version of npm?',
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
			'Where is captured values are populated regarding route parameters?',
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
   totalQuestion.textContent = quiz.length;
   currentScore.textContent = score;
   question.textContent = quiz[activeQuestion - 1].question;
   optionOne.textContent = quiz[activeQuestion - 1].options[0];
   optionTwo.textContent = quiz[activeQuestion - 1].options[1];
   optionThree.textContent = quiz[activeQuestion - 1].options[2];
   optionFour.textContent = quiz[activeQuestion - 1].options[3];
}

showContent();

const disableBtn = () => {
   options.forEach(option => {
      option.classList.add('disabled');
      if (option.textContent === quiz[activeQuestion - 1].answer){
         option.classList.add('correct');
      }
   })
}

const checkOptionOne = () => {

   if (optionOne.textContent === quiz[activeQuestion - 1].answer) {
      optionOne.classList.add('correct');
   } else {
      optionOne.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');
   
}

const checkOptionTwo = () => {
   if (optionTwo.textContent === quiz[activeQuestion - 1].answer) {
      optionTwo.classList.add('correct');
   } else {
      optionTwo.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');
}

const checkOptionThree = () => {
   
   if (optionThree.textContent === quiz[activeQuestion - 1].answer) {
      optionThree.classList.add('correct');
   } else {
      optionThree.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');
}

const checkOptionFour = () => {
   
   if (optionFour.textContent === quiz[activeQuestion - 1].answer) {
      optionFour.classList.add('correct');
   } else {
      optionFour.classList.add('wrong');
   }
   disableBtn();
   btn.classList.add('show');
 
}

const nextQuestion = () => {
   activeQuestion = activeQuestion + 1;
   showContent();
   btn.classList.add('hide');
   console.log('red');
}

// add event listener on all four options
optionOne.addEventListener('click', checkOptionOne);
optionTwo.addEventListener('click', checkOptionTwo);
optionThree.addEventListener('click', checkOptionThree);
optionFour.addEventListener('click', checkOptionFour);
btn.addEventListener('click', nextQuestion);