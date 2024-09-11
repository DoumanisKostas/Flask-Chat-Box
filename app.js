document.getElementById('send-btn').addEventListener('click', function() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() === '') return;

    fetch('/send_message', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
    })
    .then(response => response.json())
    .then(data => {
        const chatBox = document.getElementById('chat-box');
        chatBox.innerHTML = '';
        data.chat_history.forEach(msg => {
            const messageElement = document.createElement('p');
            messageElement.textContent = msg;
            chatBox.appendChild(messageElement);
        });
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    })
    .catch(error => console.error('Error:', error));
});
