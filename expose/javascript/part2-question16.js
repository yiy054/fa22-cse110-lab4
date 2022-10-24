// loops

let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2,
}

for (variable in statistics){
    if(variable.startsWith('r') || statistics[variable] % 2 === 1){
        console.log(variable);
    }
}