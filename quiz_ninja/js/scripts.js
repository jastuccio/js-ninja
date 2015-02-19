var quiz = [
    ["What is Superman's real name?", "Clarke Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

var score = 0;

for (var i = 0, max = quiz.length; i < max; i++) {
    var answer = prompt( quiz [i] [0] );
    if (answer === quiz [i] [1] ) {
        alert("Correct!");
        score ++;
    } else {
        alert("Nice try, but that is not the answer");
    }
}

alert("Game Over, you scored " + score + " points");