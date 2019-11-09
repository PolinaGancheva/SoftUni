function solve(arr){
    let speed = Number(arr[0]);
    let area = arr[1];
    if(area === 'motorway'){
        if(speed > 130){
            if(speed < 150){
                console.log('speeding');
            }
           else if(speed < 170){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving')
            }
        }
    }
    else if(area === 'interstate'){
        if(speed > 90){
            if(speed <= 110){
                console.log('speeding');
            }
           else if(speed <= 130){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving')
            }
        }
    }
    else if(area === 'city'){
        if(speed > 50){
            if(speed <= 70){
                console.log('speeding');
            }
           else if(speed <= 90){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving')
            }
        }
    }
    else if(area === 'residential'){
        if(speed > 20){
            if(speed <= 40){
                console.log('speeding');
            }
           else if(speed <= 60){
                console.log('excessive speeding');
            }
            else{
                console.log('reckless driving')
            }
        }
    }
}
solve([40, 'city']);
solve([21, 'residential'])