function solve(input){
    let totalMoney = 0;
    console.log(`Bought furniture:`);
   input.forEach((line) => {
        const pattern = />>(?<furniture>[A-Za-z]+)<<(?<price>\d+[.]?\d*)!(?<quantity>[\d]+)/gm;
        let result = pattern.exec(line);
        if(result){
            let sum = Number(result.groups.price)*Number(result.groups.quantity);
            totalMoney += sum;
            console.log(result.groups.furniture);
        }
   });
 
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);


}
solve([ '>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase' ]
    )