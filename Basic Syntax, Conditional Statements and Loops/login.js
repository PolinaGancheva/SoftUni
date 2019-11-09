function solve(input){
    let username = input[0];
    let reversedUsername ='';
    for(let i = username.length-1; i >= 0; i--){
        reversedUsername += username[i];
        
    }
    for(let j = 1; j < input.length; j++){
        if(input[j] !== reversedUsername){
            if(j === 4){
                console.log(`User ${username} blocked!`);
                break;
            }
            console.log('Incorrect password. Try again.');
        }
        else{
            console.log(`User ${username} logged in.`);
            break;
        }
      
   }
}
solve(['sunny','rainy','cloudy','sunny','not sunny']);