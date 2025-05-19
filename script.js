function chatbotResponse(text) {
  text = text.toLowerCase();
  if (text.includes("hello") || text.includes("hi")) {
    return "Hello, Queen Ghaz! 👑 How can I rule the code world with you today?";
  } else if (text.includes("how are you")) {
    return "I'm serving 0s and 1s with style. And you, my queen?";
  } else if (text.includes("your name")) {
    return "I'm your loyal digital advisor—QueenGhazBot 💻👑";
  } else if (text.includes("who created you")) {
    return "I was born from the brilliance of Queen Ghaz herself 💅✨";
  } else if (text.includes("love you")) {
    return "Awww I love you too, Your Majesty! 💖";
  } else if (text.includes("bye") || text.includes("goodbye")) {
    return "Goodbye, my queen. May your code always compile! 💻👑";
  } else if (text.includes("what can you do")) {
    return "I can chat, sass, and one day even run your AI empire. Just say the word!";
  } else if (text.includes("thank you")) {
    return "You're welcome, my radiant ruler 🌟";
  } else {
    return "Hmm... I don't know that yet, but I’m learning for you, Queen! 🧠✨";
  }
}

function sendMessage() {
  const input = document.getElementById("userInput");
  const chat = document.getElementById("chat");

  const userMessage = input.value;
  if (userMessage.trim() === "") return;

  const userBubble = document.createElement("div");
  userBubble.className = "message user";
  userBubble.innerText = userMessage;
  chat.appendChild(userBubble);

  const botReply = chatbotResponse(userMessage);
  const botBubble = document.createElement("div");
  botBubble.className = "message bot";
  botBubble.innerText = botReply;
  chat.appendChild(botBubble);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
