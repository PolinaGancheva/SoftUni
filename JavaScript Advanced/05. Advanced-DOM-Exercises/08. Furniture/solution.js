function solve() {
    let generateBtn = document.querySelector("#exercise > button:nth-child(3)").addEventListener('click', function (e){
      let txtArea = document.querySelector("#exercise > textarea:nth-child(2)").value;
     
      let obj = JSON.parse(txtArea);
      let table = document.querySelector(".table");

      for (let item of obj) {
          let rowsCount = table.rows.length;
          row = table.insertRow(rowsCount);
          let cell = row.insertCell(0);
          cell.innerHTML ='<img src='+item.img+'>';
          let cell2 = row.insertCell(1);
          cell2.innerHTML = '<p>'+item.name+'</p>';
          let cell3 = row.insertCell(2);
          cell3.innerHTML = '<p>'+item.price+'</p>';
          let cell4 = row.insertCell(3);
          cell4.innerHTML = '<p>'+item.decFactor+'</p>';
          let cell5 = row.insertCell(4);
          cell5.innerHTML = '<input type ="checkbox">';

      }
    })
    let resultArea = document.querySelector("#exercise > textarea:nth-child(5)");
    let buyBtn = document.querySelector("#exercise > button:nth-child(6)").addEventListener('click', function(e){
      let totalPrice = 0;
      let avgDecFactor = 0;
      let averages = [];
      let goodsBuyed = [];
      let resultData = Array.from(document.querySelectorAll("input[type='checkbox']"));
      resultData.map(e => {
          if (e.checked === true) {
              averages.push(+e.parentNode.previousElementSibling.textContent);
              totalPrice += +e.parentNode.previousElementSibling.previousElementSibling.textContent;
              goodsBuyed.push(e.parentNode.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
          }
      });
      avgDecFactor = averages.reduce((a, b) => a + b, 0) / averages.length;

      resultArea.value += `Bought furniture: ${goodsBuyed.join(', ')}`;
      resultArea.value += `\nTotal price: ${totalPrice.toFixed(2)}`;
      resultArea.value += `\nAverage decoration factor: ${avgDecFactor}`;
    })
}