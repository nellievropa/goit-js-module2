// Подсчитать все четніе числа в массиве

const numbers = [1, 25, 36, 54, 20, 18, 7,49, 65, 53, 2];
// задати змінну
let total = 0;

// 2. перебрать массив
// for( let i = 0; i < numbers.length; i += 1) {
//     // чтоб читалось лучше заменим numbers[i] на numbers
//     const number = numbers[i];
//     console.log(number);

// // 3. проверить елемент на четность
// if (number % 2 === 0) {
//     console.log('Четное!!!')

    // 4. если он- четній + к тоталу
    // total += number;
// }
// }

// console.log('Total: ', total);


//  єто же можно записать через for of 

// for (const number of numbers) {
//     // console.log(number);

//     if (number % 2 === 0) {
//         console.log(`${number} - Четное!!`);
//         total += number;
//     }   
// }
// console.log('Total: ', total);


// можно идти от обратного

for (const number of numbers) {
    // console.log(number);

    if (number % 2 !== 0) {
        console.log(`Эту итерацию нужно пропустить ${number} !`);
        continue;
    }   
    console.log(`${number} - Четное!!`);
    total += number;
}
console.log('Total: ', total);