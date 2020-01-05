function solve(arr){
    let cars = {};
    arr.forEach(line => {
        let [carBrand, carModel, producedCars] = line.split(' | ');
        producedCars = Number(producedCars);
        if(!cars.hasOwnProperty(carBrand)){
            cars[carBrand] = {} ;
            cars[carBrand][carModel] = producedCars;
        }else{
            if(cars[carBrand].hasOwnProperty(carModel)){
                 cars[carBrand][carModel]  += producedCars;
            }else{
                cars[carBrand][carModel] = producedCars;
            }
                
          
        }
        
    });
    for (const carBrand in cars) {
        console.log(`${carBrand}`);
        for (const carModel in cars[carBrand]) {
            console.log(`###${carModel} -> ${cars[carBrand][carModel]}`);
        }
    }
}
solve(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'Audi | Q6 | 200',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
)