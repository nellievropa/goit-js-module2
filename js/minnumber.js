//  знайти мінімальне число в масиві

// const numbers = [54, 28, 105, 70, 92, 17, 120, 3, 21, 987];
// let smallestNumber = numbers[0];

// // console.log(smallestNumber);

// for (const number of numbers) {
    

//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
   
// }
// console.log(`smallestNumber: `, smallestNumber);


// const lines = [54, 28, 105, 70, 92, 17, 120, 3, 21, 987];
// let biggestNumber = lines[0];

// for (const line of lines) {
//     if (line > biggestNumber) {
//         biggestNumber = line;
//     }
// }
// console.log(`biggestNumber:`, biggestNumber);


// for FUNCTIONS

const findSmallesNumber = function (numbers) {
    let smallestNumber = numbers[0];
    
    for (const number of numbers) {
        if (number < smallestNumber) {
            smallestNumber = number;
        }
    }
    return smallestNumber;
}


console.log(findSmallesNumber([3, 8, -2, 15]));
console.log(findSmallesNumber([13, 85, 22, 85]));
console.log(findSmallesNumber([7, 54, 21, 36, 25, 15]));