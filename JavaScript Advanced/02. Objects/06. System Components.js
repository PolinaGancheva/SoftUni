function solve(input){
    let components = {};
    input.forEach(line => {
        let [systemName, componentName, subcomponentName] = line.split(' | ');
        if(!components.hasOwnProperty(systemName)){
            components[systemName] = {};
            components[systemName][componentName] = [subcomponentName];
        }
        else{
            if(components[systemName].hasOwnProperty(componentName)){
                components[systemName][componentName].push(subcomponentName);
            }
            else{
                components[systemName][componentName] = [subcomponentName];
            }
        }
       
    });
    let systemsSorted = Object.entries(components).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length || a[0].localeCompare(b[0]));


   for (const [key,value] of systemsSorted) {
        console.log(`${key}`);
        let componentsSorted = Object.entries(value).sort((a, b) => Object.keys(b[1]).length - Object.keys(a[1]).length);
        for(let [component,arr] of componentsSorted) {
            console.log(`|||${component}`);
            for(let i = 0; i < arr.length; i++){
            console.log(`||||||${arr[i]}`);
            }
        }

    }
}
solve([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
  ]
  )