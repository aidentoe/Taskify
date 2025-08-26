console.log("Adding custom challenge");

let challenges = [
  "Make your own lunch today 🍎",
  "Plan your outfit for tomorrow 👕",
  "Write down 3 goals for the week ✍️",
  "Do a chore without being asked 🧹",
  "Try a new healthy snack 🥕",
  "Spend 10 minutes organizing your space 📚",
  "Go for a short walk 🚶",
  "Say 'no' to something you don’t want to do 🚫",
  "Text a friend to check in 💬",
  "Drink a full glass of water 💧",
];

let streak = localStorage.getItem("streak") || 0;
document.getElementById("streakCount").innerText = streak;

function newChallenge() {
  const randomIndex = Math.floor(Math.random() * challenges.length);
  document.getElementById("challenge").innerText = challenges[randomIndex];
  document.getElementById("message").innerText = "";
}

function completeChallenge() {
  const currentChallenge = document.getElementById("challenge").innerText;

  const history = JSON.parse(localStorage.getItem("challengeHistory")) || [];
  const completedDate = new Date().toLocaleDateString();

  const historyEntry = `${currentChallenge} (Completed: ${completedDate})`;
  history.push(historyEntry);

  localStorage.setItem("challengeHistory", JSON.stringify(history));

  document.getElementById("message").innerText = "Great job! 🎉 Keep it up!";
  streak++;

  document.getElementById("streakCount").innerText = streak;
  localStorage.setItem("streak", streak);
}

function addCustomChallenge() {
  const input = document.getElementById("customChallenge");
  const newChal = input.value.trim();

  if (newChal) {
    challenges.push(newChal);
    input.value = "";
    alert("Your challenge has been added! 🎯");
  } else {
    alert("Please enter a valid challenge.");
  }
}

document
  .getElementById("completeBtn")
  .addEventListener("click", completeChallenge);
document.getElementById("newBtn").addEventListener("click", newChallenge);
document
  .getElementById("addChallengeBtn")
  .addEventListener("click", addCustomChallenge);

newChallenge();
