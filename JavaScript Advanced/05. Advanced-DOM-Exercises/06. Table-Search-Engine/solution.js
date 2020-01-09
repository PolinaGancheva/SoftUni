function solve() {
   let searchBtn = document.getElementById('searchBtn').addEventListener('click', function searchStr(e){
      let inputField = document.getElementById('searchField').value.toLowerCase();
      let table = document.querySelector(".container");
      let tr = table.getElementsByTagName("tr");
      Array.from(document.getElementsByClassName('select')).map(x => x.classList.remove('select','class'));
      for (i = 0; i < tr.length; i++) {
         td = tr[i].getElementsByTagName("td");
         for(j=0 ; j<td.length ; j++){
            let tdata = td[j];
            if (tdata) {
               txtValue = tdata.textContent || tdata.innerHTML;
               if (txtValue.toLowerCase().indexOf(inputField) > -1) {
               tr[i].classList.add('select');
               }
            }  
         }
             
      }
      document.getElementById('searchField').value = '';
      console.log(document.getElementsByClassName('select'));
      
   }); 

}