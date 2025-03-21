// Typing letter effect
const letterText = "Mochi, every day with you feels like a dream I never want to wake up from. Your smile lights up my world, and your kindness makes me a better person. I still remember the day we met on 20-11-2024 — it was the start of something beautiful. I can't wait for every moment we’ll share, every memory we’ll create, and all the love that will keep growing between us. I love you more than words can ever express.";
let index = 0;

function typeLetter() {
    if (index < letterText.length) {
        document.getElementById("letter").innerHTML += letterText.charAt(index);
        index++;
        setTimeout(typeLetter, 60);
    }
}
typeLetter();

// Countdown Timer
const nextDate = new Date("April 20, 2024 00:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
    const now = new Date().getTime();
    const distance = nextDate - now;
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    countdownEl.innerHTML = `${days} days ${hours} hours ${minutes} minutes left`;
}, 1000);

// Secret Messages
const messages = [
    "You are my everything, Mochi!",
    "I can’t wait for all our adventures!",
    "I love you more each day."
];

function showMessage(index) {
    alert(messages[index]);
}

let targetPage = '';
let correctAnswer = '';

function showQuiz(page, question, answer) {
    targetPage = page;  // Set the target page
    correctAnswer = answer.toLowerCase();  // Set the correct answer
    document.getElementById('quizQuestion').innerText = question;  // Display the question
    document.getElementById('quizModal').style.display = 'flex';  // Show the modal
    console.log(`Target page set to: ${targetPage}`);
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';  // Close the quiz modal
}

function checkAnswer() {
    const answer = document.getElementById('quizAnswer').value.toLowerCase();  // Get the user's input
    if (answer === correctAnswer) {  // Check if the answer is correct
        console.log(`Navigating to: ${targetPage}`);
        window.location.href = targetPage;  // Redirect to the target page
    } else {
        alert('Incorrect answer. Please try again.');  // Alert if the answer is incorrect
    }
}

