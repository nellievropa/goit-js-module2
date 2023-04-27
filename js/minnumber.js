//  знайти мінімальне число в масиві

const numbers = [54, 28, 105, 70, 92, 17, 120, 3, 21, 987];
let smallestNumber = numbers[0];

// console.log(smallestNumber);

for (const number of numbers) {
    

    if (number < smallestNumber) {
        smallestNumber = number;
    }
   
}
console.log(`smallestNumber: `, smallestNumber);


const lines = [54, 28, 105, 70, 92, 17, 120, 3, 21, 987];
let biggestNumber = lines[0];

for (const line of lines) {
    if (line > biggestNumber) {
        biggestNumber = line;
    }
}
console.log(`biggestNumber:`, biggestNumber);