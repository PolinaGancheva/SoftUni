function solve() {
   let leftCard='';
   let rightCard='';
   document.querySelector("body > section.cards").addEventListener('click', function(e){
    e.target.src ='images/whiteCard.jpg';
    document.getElementById('result').firstChild = e.target.name;
    if(e.target.parentElement.id === 'player1Div'){
      leftCard = document.querySelector("#result > span:nth-child(1)").innerHTML = Number(e.target.name);
    }else{
      rightCard = document.querySelector("#result > span:nth-child(3)").innerHTML = Number(e.target.name);
   }
   if(leftCard !== '' && rightCard !== ''){
      let result = document.getElementById('history');
      result.innerHTML += `[${leftCard} vs ${rightCard}] `;
      biggerValue(leftCard, rightCard);
      leftCard = "";
      rightCard = "";
   }
    
   })
   function biggerValue(leftCard, rightCard){
      if(leftCard > rightCard){
         if(document.getElementsByName(rightCard).length > 1){
            document.getElementsByName(leftCard)[0].style.border = "2px solid green";
            document.getElementsByName(rightCard)[1].style.border = "2px solid red";
         }else{
            document.getElementsByName(leftCard)[0].style.border = "2px solid green";
            document.getElementsByName(rightCard)[0].style.border = "2px solid red";
         }
      }
      else if(rightCard > leftCard){
         if(document.getElementsByName(rightCard).length > 1){
            document.getElementsByName(rightCard)[1].style.border = "2px solid green";
            document.getElementsByName(leftCard)[0].style.border = "2px solid red";
         }else{
            document.getElementsByName(rightCard)[0].style.border = "2px solid green";
            document.getElementsByName(leftCard)[0].style.border = "2px solid red";
         }
      }
   }
}