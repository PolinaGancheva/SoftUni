function notify(message) {
    let notific = document.getElementById('notification');
    notific.style.display = 'block';
    notific.innerHTML = message;
    console.log(message);
    setTimeout(function(text){
        notific.style.display = 'none';
        notific.innerHTML = '';
     }, 2000);

}