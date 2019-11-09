function solve(input){
    let companies = {};
    input.forEach((line) => {
        let [ company, id ] = line.split(' -> ');
        if(!companies.hasOwnProperty(company)){
            companies[company] = new Set();
        }
            companies[company].add(id);
    
    });
   let sortedCompanies = Object.entries(companies);
         sortedCompanies.sort((a, b) => a[0].localeCompare(b[0]));
   
   
    
    for (let elem of sortedCompanies) {
        console.log(elem[0]);
        for (let number of elem[1]) {
            console.log(`-- ${number}`);
        }
    }

}
solve([
    'SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
    ]
    )