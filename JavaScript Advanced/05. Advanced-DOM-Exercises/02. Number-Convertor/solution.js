function solve() {
  
   const x = document.getElementById("selectMenuTo");
   const convertion = document.querySelector("#container > button").addEventListener('click', convert);
   function createSelectMenuOptions(){
        let option1 = document.createElement("option");
        let option2 = document.createElement("option");
        option1.textContent = "Binary";
        option1.value = "binary";
        option2.textContent = "Hexadecimal";
        option2.value = "hexadecimal";
        x.appendChild(option1);
        x.appendChild(option2);
   }
   createSelectMenuOptions();
   
    function convert(){
        let selected = x.value;
        let num = Number(document.getElementById("input").value);
        // console.log(selected);
        // console.log(num);
        let result = document.getElementById('result')
        if(selected === 'binary'){
         result.value = num.toString(2);
        }
        else if(selected === 'hexadecimal'){
         result.value = num.toString(16).toUpperCase();
        }
    }
}