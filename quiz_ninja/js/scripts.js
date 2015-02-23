var quiz = {
    "name": "Super Hero Name Quiz",
    "description": "How many super hereos can you name?",
    "question": "What is the real name of ",
    "questions": [
    {
        "question": "Superman",
        "answer": "Clarke Kent"
    },
    {
        "question": "Batman",
        "answer": "Bruce Wayne"
    },
    {
        "question": "Wonderwoman",
        "answer": "Dianna Prince"
    }]
}

var score = 0;

play(quiz);

function play(quiz) {
    for (var i = 0, question, answer, max = quiz.questions.length; i < max; i++) {
        question = quiz.questions[i].question;
        answer = ask(question);
        check(answer);
    }

    gameOver();

    function ask(question) {
        return prompt(quiz.question + question);
    }

    function check(answer) {
        if (answer === quiz.questions[i].answer) {
            alert("Correct!");
            score++;
        } else {
            alert("Nice try, but that is not the answer");
        }
    }

    function gameOver() {
        alert("Game Over, you scored " + score + " points");
    }
}