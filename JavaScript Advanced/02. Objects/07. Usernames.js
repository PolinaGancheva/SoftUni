function solve(arr){
    let usernames = new Set();
    arr.forEach(line => {
        usernames.add(line)  ; 
    });
    let sorted = Array.from(usernames).sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join('\n'));
}
solve([
    'Denise',    'Ignatius',
    'Iris',      'Isacc',
    'Indie',     'Dean',
    'Donatello', 'Enfuego',
    'Benjamin',  'Biser',
    'Bounty',    'Renard',
    'Rot'
  ]
  
);