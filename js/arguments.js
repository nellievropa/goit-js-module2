// arguments можно пнрнбрать через ФОР, но не работают пуш, поп, и другое
// const fn = function () {
//     console.log(arguments);

//     // єта команда означает Сделай массив из аргументов
//     const args = Array.from(arguments)
//     console.log(args);
    
//     // for (const arg of arguments) {
//     //     console.log(arg);
//     // }
// };


// Есть синтаксис посовременнее!!!!
// ... - rest - створює повноцінний массив - ім'я може бути любе!

// const fn = function (...args) {
//     console.log(args);
// }
// fn(1, 2, 2, 4, 5, 6, 7, 8);
// fn(1, 9, 35, 4);
// fn(98, 87, 3, 5, 64);

// щоб відокремити якісь елементи треба записати команди перед ...Рестом!!
// const fn = function (a, b, c, ...args) {
//     // a,b,c - будуть змінними (переменними)
//     console.log(`${a} ${b} ${c}`);
//     // все остальніе значения - массивом
//     console.log(args);
// }
// fn('Hello', 1, 2, 2, 4, 5, 6, 7, 8);
// fn('Alloha', 1, 9, 35, 4);
// fn('hi', 98, 87, 3, 5, 64);

// Задачі на роботу з арг!
// напиши функцію add для сложения произвольного количества аргументов

// const add = function (...args) {
//     console.log(args);

//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
//  };

// console.log(add(1, 2, 2, 4, 5, 6, 7, 8)); 
// console.log(add(1, 9, 35, 4));

// написати функцию Фильтр чисел
const filterNunmers = function (array,...args) { 
    console.log('array:', array);
    console.log('args:', args);
    // щоб повернути новий унікальний масив
    const uniqueElements = [];

    // тепер треба сравнить 2 массива, и не важно какой с каким, все равно будем перебирать все

    for (const element of array) {
        if (args.includes(element)) {
            uniqueElements.push(element);
        console.log(`${element} есть везде!!!`);
    }
        
    }
    // console.log(uniqueElements);
    // повертаем новий масив, який ми створили
    return uniqueElements;
};

console.log(filterNunmers([1, 2, 3, 4, 5], 10, 14, 2, 3));
console.log(filterNunmers([10, 23, 31, 42, 51], 10, 14, 23));
console.log(filterNunmers([100, 200, 300, 400, 500], 17, 16, 200));

// cтворити новий масив з общих елементів із автоперевірки\
function getCommonElements(array1, array2) {
    // Change code below this line
  const CommonElements = [];
  
    for (const element of array1) {
      if (array2.includes(element)) {
        CommonElements.push(element);
      }
    }
  
  return CommonElements;
   // Change code above this line
  }