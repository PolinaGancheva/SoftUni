function solve(params){
    params = params.map(Number);
    let isCompleted = false;
    let pesosPerCubicYardConcrete = 1900;
    let cubicYardsConcreteUsedPerCrewForADay = 195;
    let dailyConcreteUsege = [];
    while(!isCompleted){
        isCompleted = true;
        let currentlyWorkingCrewsCount = 0;

        for (let i = 0; i < params.length; i++) {
            if (params[i] < 30) {
                params[i]++;
                isCompleted = false;
                currentlyWorkingCrewsCount++;
            }
        }
        if (currentlyWorkingCrewsCount > 0) {
            dailyConcreteUsege.push(currentlyWorkingCrewsCount * cubicYardsConcreteUsedPerCrewForADay);
        }
    }

    console.log(dailyConcreteUsege.join(', '));
    console.log(`${dailyConcreteUsege.reduce((a, b) => a + b) * pesosPerCubicYardConcrete} pesos`);    
}
solve([21, 25, 28])