function solve(steps, footprintInM, speed){
    let speedInMperSec = speed / 3.6;
    let distance = steps * footprintInM;
    let time = distance / speedInMperSec;
    let rest = distance / 500;
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - timeMin * 60);
    let timeHr = Math.floor(time/60/60);
    if(timeHr < 10){
        if(Math.floor(timeMin+rest) < 10){
            if(timeSec < 10){
                console.log(`0${timeHr}:0${Math.floor(timeMin+rest)}:0${timeSec}`);
            }else{
            console.log(`0${timeHr}:0${Math.floor(timeMin+rest)}:${timeSec}`);
            }
        }
       else{
        console.log(`0${timeHr}:${Math.floor(timeMin+rest)}:${timeSec}`);
       }
    }
    else if(time > 10){
        if(Math.floor(timeMin+rest) < 10){
            if(timeSec < 10){
                console.log(`${timeHr}:0${Math.floor(timeMin+rest)}:0${timeSec}`);
            }else{
            console.log(`${timeHr}:0${Math.floor(timeMin+rest)}:${timeSec}`);
            }
        }else{
        console.log(`${timeHr}:${Math.floor(timeMin+rest)}:${timeSec}`);
        }
    }
    
}
// solve(4000, 0.60, 5);
// solve(2564, 0.70, 5.5)
solve(1000, 0.70, 5.5)