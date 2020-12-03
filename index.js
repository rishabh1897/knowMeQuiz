var readSync = require("readline-sync")
var call = require("chalk")

var name=readSync.question("Enter your name : ");
console.log(call.bold("Hey " +name));
console.log("Welcome to Do you know rishabh quiz?\n");
var score = 0;

var questions = [
  {
    ques: "My birth year? ",
    ans: "1997",
  },
  {
    ques: "Where do i live? ",
    ans: "Bangalore",
  },
  {
    ques: "My zodiac ",
    ans: "Gemini",
  },
  {
    ques: "My favourite kind of game? ",
    ans: "Outdoor",
  },
  {
    ques: "where is my hometown ",
    ans: "Allahabad",
  },
  {
    ques: "Am i a morning person? ",
    ans: "No",
  },
  {
    ques: "Have i watched Breaking Bad? ",
    ans: "yes",
  },
]


function play(ques, ans) {
  var userans = readSync.question(call.italic.bold(ques));
  if (ans.toUpperCase() === userans.toUpperCase()) {
    console.log(call.green.bold("Yes you were right!\n"));
    score += 1;
  }
  else {
    console.log(call.red("You missed it!\n"));
  }
  console.log(call.magenta("------------------\n"));
  return score;
}

for (var i = 0; i < questions.length; i++)
  var result = play(questions[i].ques, questions[i].ans);


console.log(call.inverse("Total questions is 7 \n"))
console.log(call.bgCyan("Your score is " + result+" \n"));
//console.log("High Score : " + highScore);
if(score===7)
{
  console.log(call.inverse("Amazing! you scored highest!!  \n"));
}
else
 console.log(call.inverse("ohoo! \n"+" Better luck next time xD  \n"));

console.log(call.bold.italic.inverse("  Thanks for playing!  "));