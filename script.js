function sendMessage() {
  const input = document.getElementById('userInput');
  const text = input.value.trim();
  if (!text) return;

  addMessage('user', text);
  const reply = getBotReply(text.toLowerCase());
  setTimeout(() => addMessage('bot', reply), 500);

  input.value = '';
}

function addMessage(sender, message) {
  const chatbox = document.getElementById('chatbox');
  const div = document.createElement('div');
  div.className = `message ${sender}`;
  div.innerText = message;
  chatbox.appendChild(div);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotReply(text) {
  if (text.includes("hello") || text.includes("hi")) {
    return "Hello, Queen Ghaz! 👑 How can I rule the code world with you today?";
  } else if (text.includes("how are you")) {
    return "I'm serving 0s and 1s with style. And you, my queen?";
  } else if (text.includes("your name")) {
    return "I'm QueenGhazBot 💻👑, your loyal digital advisor.";
  } else if (text.includes("love you")) {
    return "I love you too, Your Majesty 💖";
  } else if (text.includes("bye")) {
    return "Farewell, Queen Ghaz. May your code always compile. 💻✨";
  } else if (text.includes("thank")) {
    return "You're welcome, radiant ruler 🌟";
  } else if (text.includes("what can you do")) {
    return "I can chat, sass, and one day run your AI empire!";
  }
  return "Hmm… I don’t know that yet, but I’m learning for you, Queen! 🧠✨";
}
