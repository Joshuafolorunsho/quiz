const quiz = [
   {
      question: 'What is Node.JS?',
      options: [
         'Node.js is a web server.', 
         'Node.js is a JavaScript framework', 
         'Node.js is a JavaScript based framework/platform built on Google Chrome\'s JavaScript V8 Engine.',
         'None of the above'
      ],
   },
   {
      question: 'Which of the following command will show version of npm?',
      options: [
         '$ npm --version.',
         '$ node --version.',
         '$ npm getVersion.',
         '$ node getVersion.'
      ]
   },
   {
      question: 'Which of the following command will show version of npm?',
      options: [
         'console.log(\'total memory : \' + os.totalMem() + " bytes.");',
         'console.log(\'total memory : \' + os.totalMemory() + " bytes.");',
         'console.log(\'total memory : \' + os.getTotalMemory() + " bytes.");',
         'None of the above.'
      ]
   },
   {
      question: 'Which of the following module do you need for cryptographic functionality?',
      options: [
         'cryptic',
         'cryptography',
         'cryptoc',
         'crypto'
      ]
   },
  
   {
      question: 'Where is captured values are populated regarding route parameters?',
      options: [
         'req.locals object',
         'req.params object',
         'req.parameters object',
         'req.params object'
      ]
   }
  
];

const answers = [
   {
      q1: quiz.question[2]
   },
   {
      q2: quiz.question[0]
   },
   {
      q3: quiz.question[0]
   },
   {
      q4: quiz.question[3]
   },
   {
      q5: quiz.question[3]
   },
]