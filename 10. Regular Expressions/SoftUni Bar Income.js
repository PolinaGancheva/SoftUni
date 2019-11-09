function solve(arr){
   let totalIncome = 0;
    arr.forEach((line) => {
     
            let pattern = /%(?<name>[[A-Z][a-z]+)%[^$.%|]*<(?<product>[\w]+)>[^$.%|]*\|(?<count>[\d]+)\|[^$.%|]*?(?<price>\d+\.?\d*)\$/g ;
            let result = pattern.exec(line);
            if(result){
                console.log(`${result.groups.name}: ${result.groups.product} - ${(result.groups.price * result.groups.count).toFixed(2)}`);
                totalIncome += result.groups.count * result.groups.price;
            }
        
        
       
    });
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}
// solve([
//     '%George%<Croissant>|2|10.3$',
//     '%Peter%<Gum>|1|1.3$',
//     '%Maria%<Cola>|1|2.4$',
//     'end of shift'
//   ]
//  )
solve([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]
    )