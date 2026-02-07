const questions = [
  {
    q: "What month is our anniversary?",
    c: ["January", "April", "May"],
    correct: 2,
    
  },
  {
    q: "Where was the first place we met?",
    c: ["University", "cafe near Chao Phraya River", "The club"],
    correct: 1,
    
  },
  {
    q: "What is your favorite word to say when I start overthinking?",
    c: ["Baby,you’re crazy", "oh my gosh", "oh hooo"],
    correct: 0,
  
  },
  {
    q: "Who always said “baby I love you more😘”?",
    c: ["me", "you", "US"],
    correct: 2,
    
  },
  {
    q: "What is the food menu that our couple likes to eat?",
    c: ["Moo Krata🐽", "Suki shabu", "Both (Moo krata & Shabu)"],
    correct: 2,
    
  }
];

let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " That’s exactly right!";
  } else {
    answerHint.textContent = " That’s okay, no worries";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>Game Over </h2>
    <p class="subtle">You scored</p>
    <h6>${score} / ${questions.length}Final Score</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 5) return "An amazing match — truly meant for each other";
  if (score >= 3) return "Just the right amount of sweetness, so lovely ";
  return "Love isn’t about the score, it’s about the heart";
}

renderQuestion();
