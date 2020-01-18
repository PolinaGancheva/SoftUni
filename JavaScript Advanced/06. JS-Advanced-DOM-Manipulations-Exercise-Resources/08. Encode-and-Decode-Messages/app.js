function encodeAndDecodeMessages() {
    let messageInput = document.querySelectorAll('textarea')[0];
    let messageOutput = document.querySelectorAll('textarea')[1];
    let encodeAndSend = document.getElementsByTagName('button')[0];
    let decodeAndRead = document.getElementsByTagName('button')[1]
   encodeAndSend.addEventListener('click', function (e){
        let message = messageInput.value;
        messageOutput.value = encode(message);
        messageInput.value = '';
    })
    decodeAndRead.addEventListener('click', function (){
        let message = messageOutput.value
        messageOutput.value = decode(message);
        
    })
    function encode(str){
        let encoded = '';
        for(let i = 0; i < str.length; i++){
            encoded += String.fromCharCode(str.charCodeAt(i) + 1);
        }
        return encoded;
    }
    function decode(str){
        let decoded = '';
        for(let i = 0; i < str.length; i++){
            decoded += String.fromCharCode(str.charCodeAt(i) - 1);
        }
        return decoded;
    }
}
