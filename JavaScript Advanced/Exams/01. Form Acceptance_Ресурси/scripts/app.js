function acceptance() {
	let company = document.querySelector("#fields > td:nth-child(1) > input[type=text]");
	let product = document.querySelector("#fields > td:nth-child(2) > input[type=text]");
	let quantity = document.querySelector("#fields > td:nth-child(3) > input[type=text]");
	let scrape = document.querySelector("#fields > td:nth-child(4) > input[type=text]");

	let addIrBtn = document.getElementById('acceptance');
	addIrBtn.addEventListener('click', function add(){
		console.log(company.value );
		if(company.value !== "" && product.value !== "" ){
			if(quantity.value - scrape.value > 0){
				let resultDiv = document.createElement('div');
				let p = document.createElement('p');
				p.innerHTML = `[${company.value}] ${product.value} - ${quantity.value - scrape.value} pieces`;
				let btn = document.createElement('BUTTON');
				btn.innerHTML = "Out of stock";        
				resultDiv.appendChild(p);
				resultDiv.appendChild(btn);
				document.getElementById('warehouse').appendChild(resultDiv);
				company.value = "";
				product.value = "";
				quantity.value = "";
				scrape.value = "";
				btn.addEventListener('click', function outOfStock(){
					document.getElementById('warehouse').removeChild(resultDiv);
				})
			}
		}
	});
}