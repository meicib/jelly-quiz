function quiz() {

    console.log("in quiz")
    const questions = [
        {
            question: "question-1",
            choices: ["choice-1", "choice-2"],
            scores: [0, 0]
        },
        {
            question: "question-2",
            choices: ["choice-1", "choice-2"],
            scores: [0, 0]
        },
        {
            question: "question-3",
            choices: ["choice-1", "choice-2"],
            scores: [0, 0]
        }
    ]




    let currQNum = 0;
    let score = 0;
    // add personality scores 




    // begin quiz 
    document.getElementById("begin-quiz").addEventListener('click', function() {
        document.getElementById("main-page").style.display = "none";
        document.getElementById("quiz-page").style.display = "block";
        displayCurrentQ();
    });

    console.log("added event listener")



    function displayCurrentQ() {
        console.log("currqnum is ", currQNum)
        const currQ = questions[currQNum];
        const imgEl = document.getElementById("q-img");
        const questionEl = document.getElementById("q-text");
        const choicesEl = document.getElementById("q-choices");

        choicesEl.innerHTML = '';
    
        questionEl.textContent = currQ.question;

        for (let i = 0; i < currQ.choices.length; i++) {
            const button = document.createElement("button");
            button.textContent = currQ.choices[i];
            button.value = i;
            button.addEventListener('click', handleClick)
            choicesEl.appendChild(button);
        }

    }

    function handleClick(evt) {
        const choiceClicked = evt.target.value;
        const choiceScore = questions[currQNum].scores[choiceClicked];
        score += choiceScore;

        if (currQNum + 1 < questions.length) {
            currQNum++;
            displayCurrentQ();
        } else {
            endQuiz();
        }
        
    }

    function endQuiz() {
        document.getElementById("quiz-page").style.display = "none";
        document.getElementById("results-page").style.display = "block";
    }
}

quiz()