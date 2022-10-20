/*let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5,
    blackCars: 40,
    rareCars: 2
};

for(let key in statistics) {

    if (key[0] == 'r' || statistics[key] % 2 != 0) {
        console.log(statistics[key]);
    }
}
*/

function modArray(arr,cb) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(cb(arr[i]));
    }
    return newArr;
}

function doSum(num) {
    return num * 2;
}

console.log(modArray([1,2,3],doSum));