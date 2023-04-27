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
