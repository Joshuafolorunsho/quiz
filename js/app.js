// Caching selectors into variables
const currentQuestion = document.querySelector('.current-question'),
	totalQuestion      = document.querySelector('.total-question'),
	currentScore       = document.querySelector('.current-score'),
	question           = document.querySelector('.question'),
	optionOne          = document.querySelector('.option-1'),
	optionTwo          = document.querySelector('.option-2'),
	optionThree        = document.querySelector('.option-3'),
	optionFour         = document.querySelector('.option-4'),
   btn                = document.querySelector('.btn');
   
let activeQuestion = 1;

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
	},
	{
		question: 'Which of the following command will show version of npm?',
		options: [
			'$ npm --version.',
			'$ node --version.',
			'$ npm getVersion.',
			'$ node getVersion.',
		],
	},
	{
		question: 'Which of the following command will show version of npm?',
		options: [
			'console.log(\'total memory : \' + os.totalMem() + " bytes.");',
			'console.log(\'total memory : \' + os.totalMemory() + " bytes.");',
			'console.log(\'total memory : \' + os.getTotalMemory() + " bytes.");',
			'None of the above.',
		],
	},
	{
		question:
			'Which of the following module do you need for cryptographic functionality?',
		options: ['cryptic', 'cryptography', 'cryptoc', 'crypto'],
	},

	{
		question:
			'Where is captured values are populated regarding route parameters?',
		options: [
			'req.locals object',
			'req.params object',
			'req.parameters object',
			'req.params object',
		],
	},
];

// Answers
const answers = [
	{
		q1: quiz[0].question[2],
	},
	{
		q2: quiz[0].question[0],
	},
	{
		q3: quiz[0].question[0],
	},
	{
		q4: quiz[0].question[3],
	},
	{
		q5: quiz[0].question[3],
	},
];

// Change text content
currentQuestion.textContent = activeQuestion;
totalQuestion.textContent = quiz.length;
question.textContent = quiz[activeQuestion - 1].question;
optionOne.textContent = quiz[activeQuestion - 1].options[0];
optionTwo.textContent = quiz[activeQuestion - 1].options[1];
optionThree.textContent = quiz[activeQuestion - 1].options[2];
optionFour.textContent = quiz[activeQuestion - 1].options[3];
