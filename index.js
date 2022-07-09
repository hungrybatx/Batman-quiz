var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log("Welcome to",chalk.bold("BATMAN"),"🦇 quiz game")
var userName= readlineSync.question("To play the game, enter your name: ")
console.log("Hi!",chalk.bold.blue(userName),"👋 Welcome to Gotham")
console.log("Ready for chaos! Here we go")
var A= chalk.bold.yellow('a');
var B= chalk.bold.yellow('b');
var C=chalk.bold.yellow('c');
var D=chalk.bold.yellow('d');
console.log("Choose between",A,B,C,"and",D)
var questions= [
{
question: ("What is the batman secret identity?\n\t"+A+" Clark Kent\n\t"+B+" Bruce Wayne\n\t"+C+" Peter Parker\n\t"+D+" Hal Jordan\n"),
answer: "b"
},
{
question:("The batman villain who riddles:\n\t"+A+" Joker\n\t"+B+" Poison Ivy\n\t"+C+" Two Face\n\t"+D+" Riddler\n"),
answer: "d"
},
{
question:("What is the first name of Commissioner Gordon?\n\t"+A+" John\n\t"+B+" Joseph\n\t"+C+" James\n\t"+D+" Jack\n"),
answer: "c"
},
{
question:("Who is the batman's first sidekick?\n\t"+A+" Richard Grayson\n\t"+B+" Tim Drake\n\t"+C+" Jason Todd\n\t"+D+" Damien Wayne\n"),
answer: "a"
},
{
question:("Who is the batman's arch-nemesis?\n\t"+A+" Joker\n\t"+B+" Clayface\n\t"+C+" Lex Luthor\n\t"+D+" Sinestro\n"),
answer: "a"
},
{
question:("Batman's headquarter is:\n\t"+A+" Fortress of Solitude\n\t"+B+" Bat Cave\n\t"+C+" Themyscira\n\t"+D+" Mars\n"),
answer: "b"
},
{
question:("Who is the batman's love interest?\n\t"+A+" Poison Ivy\n\t"+B+" Harley Quinn\n\t"+C+" Wonder Woman\n\t"+D+" Catwoman\n"),
answer: "d"
},
{
question:("Batman's first appeared in:\n\t"+A+" Detective Comics #1\n\t"+B+" Detective Comics #27\n\t"+C+" Batman #1\n\t"+D+" Batman #27\n"),
answer: "b"
},
{
question:("How many solo live action batman movie are there?\n\t"+A+" 6\n\t"+B+" 7\n\t"+C+" 8\n\t"+D+" 9\n"),
answer: "c"
},
{
question:("Who's the most recent batman?\n\t"+A+" Jake Gyllenhal\n\t"+B+" Armie Hammer\n\t"+C+" Robert Pattinson\n\t"+D+" Nicholas Hoult\n"),
answer: "c"
}
]

var score=0

function play(question,answer){
  var userAnswer=readlineSync.question(question);
  if(userAnswer.toLowerCase()===answer){
    console.log("Great🎆 You're right\n");
    score+=10;
  }
  else{
    console.log("You're wrong😔\n")
  }
  console.log("Your current score is:",chalk.bold.green(score))
  console.log("_________\n")
}

for(i=0;i<questions.length;i++){
  var currentQuestion=questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}

var highScore={
  name: 'Divyanshu',
  score: 90
}

console.log("Your Total Score is:",chalk.bold.green(score));
console.log("_________\n")
console.log("High score is:",highScore.score,"by",highScore.name)

if (score>highScore.score) {
  console.log("Congratulations ✨", chalk.bold.red(userName)+"! You broke the highscore.\nSend me a screenshot of the score to add your name to the highscore.")
}