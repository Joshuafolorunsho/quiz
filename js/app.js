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
currentQuestion.textContent = activeQuestion;
totalQuestion.textContent = quiz.length;
currentScore.textContent = score;
question.textContent = quiz[activeQuestion - 1].question;
optionOne.textContent = quiz[activeQuestion - 1].options[0];
optionTwo.textContent = quiz[activeQuestion - 1].options[1];
optionThree.textContent = quiz[activeQuestion - 1].options[2];
optionFour.textContent = quiz[activeQuestion - 1].options[3];


// Check if question is answered. Return true if yes, return false if not answered
const isAnswered = () => {
   let correct = false;
   // Looping through the li (options) to check if it has a class of correct
   options.forEach(option => {
      if (option.classList.contains('correct')) {
        correct = true;
      }
   });
   return correct;
}



const checkOptionOne = () => {

   if (!isAnswered()) {      
      if ((optionOne.textContent === quiz[activeQuestion - 1].answer)) {
         optionOne.classList.add('wrong');
         score++;
         currentScore.textContent = score;
      } else {
         optionOne.classList.add('wrong');
         optionThree.classList.add('correct');
      }
      btn.classList.add('show');
   }
   
}

const checkOptionTwo = () => {
   if (!isAnswered()) {   
      if ((optionTwo.textContent === quiz[activeQuestion - 1].answer)) {
         optionTwo.classList.add('correct');
         score++;
         currentScore.textContent = score;
      } else {
         optionTwo.classList.add('wrong');
         optionThree.classList.add('correct');
      }
      btn.classList.add('show');
   }
}

const checkOptionThree = () => {
   
   if (optionThree.textContent === quiz[activeQuestion - 1].answer) {
      optionThree.classList.add('correct');
      score++;
      currentScore.textContent = score;
   } else {
      optionThree.classList.add('wrong');
   }
   btn.classList.add('show');
}

const checkOptionFour = () => {
   
   if (!isAnswered()) {   
      if (optionFour.textContent === quiz[activeQuestion - 1].answer) {
         optionFour.classList.add('correct');
         btn.classList.add('show');
         score++;
         currentScore.textContent = score;
      } else {
         btn.classList.add('show');
         optionFour.classList.add('wrong');
         optionThree.classList.add('correct');
      }
   }
}

const nextQuestion = () => {
   
}

// add event listener on all four options
optionOne.addEventListener('click', checkOptionOne);
optionTwo.addEventListener('click', checkOptionTwo);
optionThree.addEventListener('click', checkOptionThree);
optionFour.addEventListener('click', checkOptionFour);
btn.addEventListener('click', nextQuestion);