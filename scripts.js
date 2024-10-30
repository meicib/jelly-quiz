function quiz() {

    function glow() {
        const b = document.querySelector("#body");
        const content = b.querySelector(":scope > *");
        const clone = content.cloneNode(true);
        const overlay = document.querySelector(".overlay");
        overlay.insertAdjacentElement("beforeend", clone);
    
    
        const applyOverlayMask = (e) => {
            const overlayEl = e.currentTarget;
            const x = e.pageX;
            const y = e.pageY;
            overlayEl.style = `--opacity: 0.5; --x: ${x}px; --y:${y}px;`;
          };
          
        document.body.addEventListener("pointermove", applyOverlayMask);
    }

    console.log("in quiz")
    const questions = [
        {
            question: "question-1",
            image: "assets/transparent-hyrax.webp",
            text: "Jellyfish are ancient, translucent creatures that drift gracefully through the ocean with their long, trailing tentacles. Despite their simple bodies—no brains or bones—they have survived for over 500 million years. Some even glow in the dark, adding a touch of eerie beauty to their mysterious presence.",
            choices: ["choice-1", "choice-2"],
            scores: [0, 0]
        },
        {
            question: "question-2",
            image: "assets/transparent-hyrax.webp",
            text: "Jellyfish are ancient, translucent creatures that drift gracefully through the ocean with their long, trailing tentacles. Despite their simple bodies—no brains or bones—they have survived for over 500 million years. Some even glow in the dark, adding a touch of eerie beauty to their mysterious presence.",
            choices: ["choice-1", "choice-2"],
            scores: [0, 0]
        },
        {
            question: "question-3",
            image: "assets/transparent-hyrax.webp",
            text: "Jellyfish are ancient, translucent creatures that drift gracefully through the ocean with their long, trailing tentacles. Despite their simple bodies—no brains or bones—they have survived for over 500 million years. Some even glow in the dark, adding a touch of eerie beauty to their mysterious presence.",
            choices: ["choice-1", "choice-2"],
            scores: [0, 0]
        }
    ]


    let currQNum = 0;
    let score = 0;
    // add personality scores 




    // begin quiz 
    glow();
    document.getElementById("main-page").style.display = "block";
    document.getElementById("begin-quiz").addEventListener('click', function() {
        document.getElementById("main-page").style.display = "none";
        document.getElementById("quiz-page").style.display = "block";
        displayCurrentQ();
    });

    console.log("added event listener")



    function displayCurrentQ() {
        console.log("currqnum is ", currQNum)
        const currQ = questions[currQNum];
        const questionEl = document.getElementById("q-question");
        const imgEl = document.getElementById("q-img");
        const textEl = document.getElementById("q-text")
        const choicesEl = document.getElementById("q-choices");

        choicesEl.innerHTML = '';
    
        questionEl.textContent = currQ.question;
        imgEl.src = currQ.image;
        textEl.textContent = currQ.text;

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