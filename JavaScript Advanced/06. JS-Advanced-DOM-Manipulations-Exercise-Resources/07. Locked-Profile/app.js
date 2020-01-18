// function lockedProfile() {
//    let btns = Array.from(document.getElementsByTagName('button')).map(x => x.addEventListener('click', showMore));
//    function showMore(e){
//     if(!e.target.parentElement.children[2].checked){
//      e.target.parentElement.children[9].style.display = 'block';
//      e.target.parentElement.children[10].innerHTML = 'Hide it';
//         e.target.parentElement.children[10].addEventListener('click', function (e){
//             if(!e.target.parentElement.children[2].checked){
//             e.target.parentElement.children[9].style.display = 'none';
//             e.target.parentElement.children[10].innerHTML = 'Show more';
//             }
//         })
       
//     }
//    }
// }
function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));
 
    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const moreInformation = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
 
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                moreInformation.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                moreInformation.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }
}