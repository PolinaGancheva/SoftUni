function solve(arr){
    let noisyKids = arr.shift().split('&');
    arr.forEach((line) => {
        let tokens = line.split(' ');
        let command = tokens[0];
        if(command === 'Bad'){
            let name = tokens[1];
            if(!noisyKids.includes(name)){
                noisyKids.unshift(name);
            }
        }
        else if(command === 'Good'){
            let name = tokens[1];
            if(noisyKids.includes(name)){
                noisyKids.splice(noisyKids.indexOf(name),1);
            }
        }
        else if(command === 'Rename'){
            let oldName = tokens[1];
            let newName = tokens[2];
            if(noisyKids.includes(oldName)){
                noisyKids.splice(noisyKids.indexOf(oldName),1,newName);
            }
        }
        else if(command === 'Rearrange'){
            let name = tokens[1];
            if(noisyKids.includes(name)){
                noisyKids.splice(noisyKids.indexOf(name),1);
                noisyKids.push(name);
            }
        }

    });
    console.log(noisyKids.join(', '));

}
solve([ 'Peter&George&Mike', 'Bad Joshua', 'Good Peter', 'Finished!' ]);
solve([
    'Joshua&Aaron&Walt&Dustin&William',
    'Good Walt',
    'Bad Jon ',
    'Rename Aaron Paul',
    'Rearrange Jon',
    'Rename Peter George',
    'Finished!'
  ])