function toggle() {
    let btn = document.getElementsByClassName('button')[0];
    console.log( document.getElementById('extra').style.display);
    if(document.getElementById('extra').style.display === 'block'){
        document.getElementById('extra').style.display = 'none'
        btn.innerHTML = 'More';
    }else{
        document.getElementById('extra').style.display = 'block';
        btn.innerHTML = 'Less';
    }
    

}