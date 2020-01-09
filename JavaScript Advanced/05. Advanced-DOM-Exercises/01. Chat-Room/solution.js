function solve() {
   const sendBtn = document.getElementById('send').addEventListener('click', sendMessage)
   const messageContainer = document.getElementById('chat_input');
 
   function sendMessage(){
      let message = messageContainer.value;
      let newMessage = document.createElement('div');
      newMessage.classList.add('message', 'my-message');
      newMessage.textContent = message;
      document.getElementById('chat_messages').appendChild(newMessage);
      messageContainer.value = '';
   }
}


