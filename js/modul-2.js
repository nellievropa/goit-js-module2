// Подсчитать все четніе числа в массиве

// const numbers = [1, 25, 36, 54, 20, 18, 7,49, 65, 53, 2];
// // задати змінну
// let total = 0;

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

// for (const number of numbers) {
//     // console.log(number);

//     if (number % 2 !== 0) {
//         console.log(`Эту итерацию нужно пропустить ${number} !`);
//         continue;
//     }   
//     console.log(`${number} - Четное!!`);
//     total += number;
// }
// console.log('Total: ', total);

// із автоперевірки
// function calculateTotal(number) {
//     // Change code below this line
//      let total = 0;
     
//      for (let i = 0; i <= number; i += 1) {
//           console.log(i);
//         total += i;
//       }
    
//       return total;
//         // Change code above this line
//    }
//    console.log(calculateTotal(7));

// із автоперевірки СУММА!!!

function calculateTotalPrice(order) {
    let total = 0;
    // Change code below this line
  for (let i = 0; i <= order.length - 1; i += 1) {
    console.log(order[i]);
    total += order[i];
  }
    // Change code above this line
    return total;
  }
  console.log(calculateTotalPrice([12, 85, 37, 4]));