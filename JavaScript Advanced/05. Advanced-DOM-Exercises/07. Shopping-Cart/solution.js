function solve() {
   let totalPrice = 0;
   let list = new Set();
   let txtArea = document.querySelector("body > div > textarea");
   let addBtn = document.querySelectorAll('.add-product');
   Array.from(addBtn).forEach((line) => {
      line.addEventListener('click', function(e){
         let name = e.target.parentElement.parentElement.childNodes[3].childNodes[1].innerHTML;
         let price = e.target.parentElement.parentElement.childNodes[7].innerHTML;
        
         txtArea.value += `Added ${name} for ${price} to the cart.\n`;
         totalPrice += Number(price);
         list.add(name);
      })
   })
   let checkOutBtn = document.querySelector('.checkout').addEventListener('click', function(e){
      txtArea.value += `You bought ${[...list].join(', ')} for ${totalPrice.toFixed(2)}.`;
      disableButtons();
   });

   function disableButtons(){
      let buttons = Array.from(document.querySelectorAll('button'));
       buttons.forEach(button => button.disabled = true);
   };

}