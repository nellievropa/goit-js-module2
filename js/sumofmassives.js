// порахувати сумму чисел 2-х массивів
// 1-й примитивний метод

// const array1 = [1, 2, 3, 5, 8, 9];
// const array2 = [20, 52, 45, 67, 81, 32];
// let total = 0;

// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }

// for (let i = 0; i < array2.length; i += 1) {
//     total += array2[i];
// }

// console.log(total);

//2. метод CONCATS

const array1 = [1, 2, 3, 5, 8, 9];
const array2 = [20, 52, 45, 67, 81, 32];
let total = 0;

const numbers = array1.concat(array2, [1, 2, 3, 6]);
console.log(numbers);

for (const number of numbers) {
    total += number;
}

console.log(total);


// із автоперевірки метод Пуш:

function filterArray(numbers, value) {
    // Change code below this line
 let filterArray = numbers;

for (let i = 0; i <= numbers.length - 1; i += 1) {
    if (i > value) {
        filterArray = [numbers.push(i)];
    }
}
 
 return filterArray;
   // Change code above this line
 }
 
 console.log(filterArray([1, 2, 3, 4, 5], 3));
 console.log(filterArray([1, 2, 3, 4, 5], 4));
 console.log(filterArray([12, 24, 8, 41, 76], 20));
