const chatBody = document.getElementById('chat-body');
const userInput = document.getElementById('user-input');
const sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', () => {
  const message = userInput.value.trim();

  if (message !== '') {
    appendMessage('sent', message);
    userInput.value = '';
    chatBody.scrollTop = chatBody.scrollHeight;
    simulateReply();
  }
});

function appendMessage(type, content) {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message', type);
  const messageText = document.createElement('p');
  messageText.textContent = content;
  messageContainer.appendChild(messageText);
  chatBody.appendChild(messageContainer);
}

function simulateReply() {
  setTimeout(() => {
    appendMessage('received', 'Thank you for your message! How can I further assist you?');
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 1000);
}
