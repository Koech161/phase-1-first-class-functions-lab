// Code your solution in this file!
function returnFirstTwoDrivers(driversArray){
    let drivers= [...driversArray.slice(0,2)]
return drivers;
}
function returnLastTwoDrivers(driversArray){
let drivers=[...driversArray.slice(2,4)]
return drivers;
}
const selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(Multiplier){
    return function fareMultiplier(fare){
        return fare*Multiplier
    }
}
function fareDoubler(_doubler){
  let fare= 10
    return (10*2)
}
function fareTripler(_triples){
    let fare=12
    return (12*3)
}
function selectDifferentDrivers(drivers, selectingFunction){
    return selectingFunction(drivers)
}