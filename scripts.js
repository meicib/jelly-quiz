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

    function bubble() {
        const bubbleContainerEl = document.getElementById("bubble-container");
        for (i = 0; i < 50; i++) {
            const snowflakeEl = document.createElement("div");
            snowflakeEl.classList.add("bubble");
            bubbleContainerEl.appendChild(snowflakeEl);
        }
    }

    function toggleStyle() {
        const styleButton = document.getElementById("toggle-style");
        styleButton.addEventListener("click", function() {
            if (styleButton.textContent == "simple display: off") {
                styleButton.textContent = "simple display: on";
                document.getElementById("bubble-container").replaceChildren();
            } else {
                styleButton.textContent = "simple display: off"
                bubble()
            }
        })
        
    }

    const questions = [
        {
            question: "question 1",
            image: "assets/transparent-hyrax.webp",
            text: "It’s a cool, autumn afternoon, and you’ve decided to visit your local aquarium with your friends. You’re sitting in front of a particularly luminous tank with various jellyfish propelling themselves through the water. Transfixed by their rhythmic movements, your eyelids start to droop, the darkness of the aquarium fueling your sleepiness when suddenly– SPLASH! You’ve somehow been dropped right into the cold waters of the jellyfish exhibit. What do you do?",
            choices: [
                "Panic! What if the aquarium staff kick you out because they thought you jumped in?", 
                "Let the water envelop your body and enjoy the up close view.",
                "Look for a way out – maybe you can swim to the top?",
                "Bang on the glass to try to get someone’s attention."],
            scores: [["Elegant Jelly", "Spotted Jelly"], ["Fried Egg Jelly", "Moon Jelly"], ["Box Jelly", "Flower Hat Jelly"], ["Man-O-War", "Black Sea Nettle"]],
            next: [1, 2, 2, 1]
        },
        {
            question: "question 2a",
            image: "assets/transparent-elephant-shrew.webp",
            text: "Despite the commotion you make, no one else seems to notice your predicament. More and more jellyfish begin to surround you, until your vision is obscured by a kaleidoscope of vivid colors.",
            choices: [
                "You swipe at the jellyfish, hoping to clear them away.",
                "Not wanting to injure any jellyfish, you keep your arms close to your body.",
                "Try to reach out and catch one of the jellyfish.",
                "Play around with the jellyfish, weaving your hands through them."
            ],
            scores: [["Man-O-War"], ["Spotted Jelly"], ["Elegant Jelly"], ["Black Sea Nettle"]],
            next: [2, 2, 2, 2]
        },
        {
            question: "question 2b",
            image: "assets/transparent-manatee.webp",
            text: "The water wraps around your limbs with no end in sight, just an endless void of darkness beyond the glow of the jellyfish. Soon, your view of the top of the tank is shrouded by a mass of jellyfish surrounding you.",
            choices: [
                "You simply gaze at the whirling colors, appreciating its beauty.",
                "Trying to see beyond the jellyfish, you try to look for any gaps in the colors.",
                "You let the jellyfish swarm around you, curious as to what they are doing.",
                "Twirl around, creating a tornado of jellyfish with your movements."
            ],
            scores: [["Moon Jelly"], ["Box Jelly"], ["Fried Egg Jelly"], ["Flower Hat Jelly"]],
            next: [1, 1, 1, 1]
        },
        {
            question: "question 3",
            image: "assets/transparent-elephant-shrew.webp",
            text: "You squeeze your eyes shut once the colors become too intense. When you open them again, you find yourself in a bustling, underwater market. Where everyone is a jellyfish, including you it seems. What’s your plan of action?",
            choices: [
                "Talk to the locals!",
                "Wander around the market.",
                "Look for a safe place to hide out.",
                "Marvel at your newfound jellyfish capabilities."
            ],
            scores: [["Black Sea Nettle", "Spotted Jelly"], ["Fried Egg Jelly", "Elegant Jelly"], ["Box Jelly", "Moon Jelly"], ["Man-O-War", "Flower Hat Jelly"]],
            next: [1, 2, 2, 1]
        },
        {
            question: "question 4a",
            image: "assets/transparent-manatee.webp",
            text: "The jellyfish around you don’t seem to mind your unfamiliarity with your new form and environment. Rather, they encourage you to make the most out of your stay and inform you that should you choose to return to your world, you would have to visit the king.",
            choices: [
                "You thank them for their kindness and decide to make your way to the palace ",
                "You head to the palace on your own, determined to find the route there yourself",
                "You chat with the locals as they guide you to the palace – their sense of humor is delightful!",
                "You try not to get distracted by the fun trinkets inside the shops as you swim towards the palace."
            ],
            scores: [["Spotted Jelly"], ["Man-O-War"], ["Black Sea Nettle"], ["Flower Hat Jelly"]],
            next: [2, 2, 2, 2]
        },
        {
            question: "question 4b",
            image: "assets/transparent-elephant-shrew.webp",
            text: "As you make your way through the vibrant market, several jellyfish notice your alert, seemingly puzzled gaze. They are perceptive of your novelty in this world, and offer to guide you to the king, who can help you return to the human realm.",
            choices: [
                "You head towards the palace, hoping the king doesn’t misunderstand your intentions.",
                "You decide to travel to the palace alone, giving you time to think of what to say.",
                "You follow, since it seems to be the most straightforward solution to your dilemma.",
                "You head to the palace with them, as it seems like the next course of action in your adventure."
            ],
            scores: [["Elegant Jelly"], ["Moon Jelly"], ["Box Jelly"], ["Fried Egg Jelly"]],
            next: [1, 1, 1, 1]
        },
        {
            question: "question 5",
            image: "assets/transparent-manatee.webp",
            text: "The palace looms largely in front of you, an imposing structure made from colorful coral. Two guards stand by the entrance, but it seems as though your arrival was expected, as they push the tall doors open, motioning for you to enter. How do you make your entrance?",
            choices: [
                "You make a grand first impression! An extravagant entrance, by an important person (or, jellyfish right now), for a big problem, right?",
                "You immediately convey your side of the story. Hopefully it will clear up any confusion and make it easier to send you back.",
                "You greet the royal family politely, aiming to get in their good graces before asking for their assistance.",
                "You try to make the king laugh by doing an interpretive jellyfish dance! Maybe it will make them realize how imperative it is that you become human again."
            ],
            scores: [["Black Sea Nettle", "Man-O-War"], ["Box Jelly", "Elegant Jelly"], ["Spotted Jelly", "Moon Jelly"], ["Flower Hat Jelly", "Fried Egg Jelly"]],
            next: [1, 2, 2, 1]
        },
        {
            question: "question 6a",
            image: "assets/transparent-elephant-shrew.webp",
            text: "The king flutters his filaments at your entrance, finding your grandiose actions amusing. He seems to understand your efforts convey the importance of your situation, and he motions for you to follow him, leading you into a dark side room.",
            choices: [
                "Jokingly ask if you should be afraid for your safety.",
                "Try to spread out your tendrils to seem bigger in case he tries anything.",
                "Look around the room, noticing the lack of windows.",
                "Wait for the king to do something – there’s probably a reason for this eerie room."
            ],
            scores: [["Black Sea Nettle"], ["Man-O-War"], ["Flower Hat Jelly"], ["Fried Egg Jelly"]],
            next: [2, 2, 2, 2]
        },
        {
            question: "question 6b",
            image: "assets/transparent-manatee.webp",
            text: "The queen in particular seems sympathetic towards your plight, nudging the king forward with her tendrils. He approaches you and gently indicates for you to follow, bringing you to a dimly lit side room.",
            choices: [
                "Position yourself near the door in case you need to run.",
                "Despite the suspicious room, trust that the king has your best interests in mind.",
                "You’re probably reading too much into the situation, right? You don’t want to assume the wrong thing.",
                "Subtly glance around, looking for any clues that would allude to his intentions."
            ],
            scores: [["Box Jelly"], ["Spotted Jelly"], ["Elegant Jelly"], ["Moon Jelly"]],
            next: [1, 1, 1, 1]
        },
        {
            question: "question 7",
            image: "assets/transparent-elephant-shrew.webp",
            text: "The king seems to realize the sketchiness of the situation, and quickly explains to you that he hails from the deep sea, so he prefers little light. Before you can respond, the king starts to wave his tentacles. A bright glow emanates from them, filling up the room until it’s too much for you to handle. Instinctively, you close your eyes. Wait, your eyes?",
            choices: [
                "Wiggle your limbs. Do they feel like tendrils, or hands and fingers?",
                "Keep your eyes shut for a little longer, hoping that the feeling of being a jellyfish doesn’t leave you so soon.",
                "Immediately sit up and peer down at yourself, patting down your body to make sure it’s real.",
                "Immediately glance around, noticing the large aquarium tanks and, most glaringly, the lack of water all around you."
            ],
            scores: [["Box Jelly", "Moon Jelly"], ["Flower Hat Jelly", "Elegant Jelly"], ["Fried Egg Jelly", "Man-O-War"], ["Black Sea Nettle", "Spotted Jelly"]],
            next: [1, 1, 2, 2]
        },
        {
            question: "question 8a",
            image: "assets/transparent-manatee.webp",
            text: "Upon opening your eyes, you find that you are still on that same bench you fell asleep on. The aquarium lights are as dim as ever, and the jellyfish float in their tank as if nothing had ever happened. You can hear the sound of footsteps, the familiar chatter of your friends’ voices growing louder.",
            choices: [
                "You watch the jellyfish quietly while waiting for your friends to arrive, wondering what the experience meant.",
                "You decide to keep the experience to yourself. You doubt your friends would take what happened seriously.",
                "Tell your friends everything that happened, sparing no detail, no matter how small.",
                "Approach the jellyfish, looking for any signs in their enclosure of your escapade."
            ],
            scores: [["Moon Jelly"], ["Elegant Jelly"], ["Flower Hat Jelly"], ["Box Jelly"]],
            next: [2, 2, 2, 2]
        },
        {
            question: "question 8b",
            image: "assets/transparent-elephant-shrew.webp",
            text: "You notice almost immediately that you are right where you fell asleep: in the dimly lit room, on that hard bench, with the jellyfish in their tank. You hear the chatter of your friends in the distance, somewhere else in the aquarium.",
            choices: [
                "Keep quiet about the incident, wanting to figure out the phenomenon yourself before involving others.",
                "You check on your friends to see if anyone else had a similar experience.",
                "Immediately tell your friends everything that happened, but add a few thrilling moments to make the story more exciting.",
                "You join your friends in their conversation as they approach, deciding to mull over your adventure later."
            ],
            scores: [["Man-O-War"], ["Spotted Jelly"], ["Black Sea Nettle"], ["Fried Egg Jelly"]],
            next: [1, 1, 1, 1]
        }
    ]

    const jellyinfo = {
        "Fried Egg Jelly": {
            traits: "Laidback, Easygoing, Go-with-the-flow",
            habitat: "You enjoy living in shallow sea depths, letting the waves of the seas propel you. A favorite activity of yours is letting the sun, shining through the crystalline water, warm your body.",
            compatible: "Black Sea Nettle, Spotted Jelly, Moon Jelly",
            incompatible: "Man-O-War, Elegant Jelly"
        },
        "Man-O-War": {
            traits: "Assertive, Tough, Adamant",
            habitat: "You enjoy traversing through the surface of the sea or beaches, never afraid to battle strong waves or the hands of curious humans. Maybe you should work on alleviating your painful sting!",
            compatible: "Elegant Jelly, Black Sea Nettle",
            incompatible: "Flower Hat Jelly, Moon Jelly"
        },
        "Black Sea Nettle": {
            traits: "Outgoing, Playful, Goofy",
            habitat: "You live in coastal waters, enjoying the liveliness of the teeming habitats. An ordinary day consists of cheerfully greeting crabs, manta rays, sardines, sea lions, and all the other friends you’ve made!",
            compatible: "Flower Hat Jelly, Fried Egg Jelly, Moon Jelly",
            incompatible: "Box Jelly, Elegant Jelly"
        },
        "Flower Hat Jelly": {
            traits: "Eye-catching, Whimsical, Quirky",
            habitat: "You live near the ocean floor, your sprightly personality and striking looks standing out in the darkness. This stark difference causes some others to consider you odd, but your friends find that charm endearing.",
            compatible: "Elegant Jelly, Box Jelly, Black Sea Nettle",
            incompatible: "Man-O-War, Fried Egg Jelly"
        },
        "Spotted Jelly": {
            traits: "Dependable, Caring, Trustworthy",
            habitat: "You live in bays, harbors and lagoons. Despite the hecticness of your life, living so close to land, others find that you’re a steady constant in their life, providing comfort in times of need.",
            compatible: "Box Jelly, Moon Jelly, Man-O-War",
            incompatible: "Elegant Jelly"
        },
        "Moon Jelly": {
            traits: "Quiet, Introspective, Peaceful",
            habitat: "You live in temperate seas, preferring consistent currents. This consistency allows for you to look inward, often lost in your own mind as the currents push you through the water, cradling you gently.",
            compatible: "Spotted Jelly, Elegant Jelly, Box Jelly",
            incompatible: "Man-O-War, Flower Hat Jelly"
        },
        "Elegant Jelly": {
            traits: "Mysterious, Unknown, Misunderstood",
            habitat: "You live in various marine environments. Many find you hard to decipher, your anonymity causing some to mistrust you. Those who have managed to get close to you know that you simply enjoy your privacy.",
            compatible: "Moon Jelly, Flower Hat Jelly, Fried Egg Jelly",
            incompatible: "Black Sea Nettle, Spotted Jelly"
        },
        "Box Jelly": {
            traits: "Strategic, Serious, Focused",
            habitat: "You prefer warm, tropical waters, using your sharp mind to propel you through labyrinths of coral reefs and sea life as you swim towards your goal. Some may call you single-minded, others say determined.",
            compatible: "Man-O-War, Moon Jelly, Spotted Jelly",
            incompatible: "Fried Egg Jelly, Black Sea Nettle"
        }
    };


    let currQNum = 0;
    let score = {
        "Fried Egg Jelly": 0,
        "Man-O-War": 0,
        "Black Sea Nettle": 0,
        "Flower Hat Jelly": 0,
        "Spotted Jelly": 0,
        "Moon Jelly": 0,
        "Elegant Jelly": 0,
        "Box Jelly": 0
    };


    // begin quiz 
    bubble();
    toggleStyle();
    document.getElementById("main-page").style.display = "block";
    document.getElementById("begin-quiz").addEventListener('click', function() {
        document.getElementById("main-page").style.display = "none";
        document.getElementById("quiz-page").style.display = "block";
        displayCurrentQ();
    });


    function displayCurrentQ() {
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
        const choiceScoreArray = questions[currQNum].scores[choiceClicked];

        for (let i = 0; i < choiceScoreArray.length; i++) {
            score[choiceScoreArray[i]] += 1;
        }

        if (currQNum + 2 >= questions.length) {
            endQuiz();
        } else {
            nextq = questions[currQNum].next[choiceClicked];
            currQNum += nextq;
            displayCurrentQ();
        }
        
    }

    function endQuiz() {
        document.getElementById("quiz-page").style.display = "none";
        let resultjelly = "";
        let highestscore = 0;
        for (const jelly in score) {
            console.log(jelly)
            if (score[jelly] >= highestscore) {
                highestscore = score[jelly];
                resultjelly = jelly;
            }
        }
        document.getElementById("jelly").textContent = "You are a " + `${resultjelly}` + "!";
        document.getElementById("traits").textContent = "Traits: " + jellyinfo[resultjelly].traits;
        document.getElementById("habitat").textContent = jellyinfo[resultjelly].habitat;
        document.getElementById("compatible").textContent = "You're most compatible with " + jellyinfo[resultjelly].compatible;
        document.getElementById("incompatible").textContent = "and don't pair well with " + jellyinfo[resultjelly].incompatible;
        document.getElementById("results-page").style.display = "block";
    }
}

quiz()