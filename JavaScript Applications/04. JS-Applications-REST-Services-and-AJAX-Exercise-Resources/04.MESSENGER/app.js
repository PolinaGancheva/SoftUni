function attachEvents() {
   let sendBtn = document.querySelector("#submit");
   let refreshBtn = document.querySelector("#refresh");
   let inputName = document.querySelector("#author");
   let inputMessage = document.querySelector("#content");
   let resultContainer = document.querySelector("#messages");

   sendBtn.addEventListener('click', function(){
    const data = { author: inputName.value, content: inputMessage.value };

    fetch('https://messanger-3511a.firebaseio.com/messanger.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then(() => {
            inputName.value = '';
            inputMessage.value = '';
        })
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

   })

   refreshBtn.addEventListener('click', function(){
    fetch('https://messanger-3511a.firebaseio.com/messanger.json')
    .then(res => res.json())
    .then(data => {
        Object.entries(data)
                    .forEach(([elId, messageData]) => {
                        resultContainer.innerHTML += `${messageData.author}:${messageData.content}\n`
                    })
      
    })
   })
}

attachEvents();