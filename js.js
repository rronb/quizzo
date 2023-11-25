// Questions that will be asked
const Questions = [{
	q: "What was the first capital of the United States of America?",
	a: [{ text: "New York City", isCorrect: false },
	{ text: "Washington DC", isCorrect: false },
	{ text: "Philadelphia", isCorrect: true },
	{ text: "Miami", isCorrect: false }
	]

},
{
	q: "What artist is from Philadelphia?",
	a: [{ text: "Nelly", isCorrect: false, isSelected: false },
	{ text: "Pitbull", isCorrect: false },
	{ text: "Meghan Trainor", isCorrect: false },
	{ text: "Lil Uzi Vert", isCorrect: true }
	]

},
{
	q: "What team does the saying 'Trust the Process(TTP)' apply to?",
	a: [{ text: "Union", isCorrect: false },
	{ text: "Flyers", isCorrect: false },
	{ text: "76ers", isCorrect: true },
	{ text: "Eagles", isCorrect: false }
	]

}

]

let currQuestion = 0
let score = 0

function loadQues() {
	const question = document.getElementById("ques")
	const opt = document.getElementById("opt")

	question.textContent = Questions[currQuestion].q;
	opt.innerHTML = ""

	for (let i = 0; i < Questions[currQuestion].a.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = Questions[currQuestion].a[i].text;

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
}

loadQues();

function loadScore() {
	const totalScore = document.getElementById("score")
	totalScore.textContent = `You scored ${score} out of ${Questions.length}!!!`
    const smileyImg = document.createElement("img");

    smileyImg.src = "smiley.gif";
    const imageContainer = document.getElementById("score")
    imageContainer.appendChild(smileyImg) 
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQues();
	} else {
		document.getElementById("opt").remove()
		document.getElementById("ques").remove()
		document.getElementById("btn").remove()
        
		loadScore();
	}
}

function checkAns() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].a[selectedAns].isCorrect) {
		score++;
		console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}
