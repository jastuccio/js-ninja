var quiz = [
    ["What is Superman's real name?", "Clarke Kent"],
    ["What is Wonderwoman's real name?", "Dianna Prince"],
    ["What is Batman's real name?", "Bruce Wayne"]
];

var score = 0;

play(quiz);

function play(quiz) {
    for (var i = 0, question, answer, max = quiz.length; i < max; i++) {
        question = quiz[i][0];
        answer = ask(question);
        check(answer);
    }

    gameOver();


    function ask(question) {
        return prompt(question); // quiz[i][0] is the ith questions
    }

    function check(answer) {
        if (answer === quiz[i][1]) { // quiz[i][1] is the ith answer
            alert("Correct!");
            score++;
        } else {
            alert("Wrong!");
        }
    }

    function gameOver() {
        alert("Game Over, you scored " + score + " points");
    }
}