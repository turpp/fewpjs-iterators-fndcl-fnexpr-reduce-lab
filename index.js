const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here

function reducer(acc, element){return element + acc}
function batteries(){
    let totalBatteries = batteryBatches.reduce(reducer)
    return totalBatteries
}

