
// массиви
// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// console.table(friends);

// console.log(friends[1]);


// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// friends[2] = 'fdtrug';
// console.log(friends);

// примитиві і складні типи

// let a = 10;
// let b = a;

// console.log(a);
// console.log(b);

// a =20;

// console.log(a);
// console.log(b);


// складні типи

// const a = [1, 2, 3, 4]
// const b = a;

// console.log('a', a)
// console.log('b', b);

// a[1] = 500;

// console.log('a', a)
// console.log('b', b);

// console.log(a === b);

// // массиви не равні, потому что у них разніе ячейки для хранения информации

// console.log([1, 2, 2] === [1, 2, 2]);


// перебор массивов FOR

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// це неправильна і примітивна практика 
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);
// console.log(friends[3]);

// правильно буде використовувати FOR

// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += `-${i}`;
// }
    // console.log(i);
    // перебрати масив любої довжини
    // console.log(friends[i]);
// }
// console.table(friends);


// FOR of - записуеться по-іншому, але також перебирає

// for (let friend of friends) {
//     console.log(friend);
// }

// console.table(friends);

// ЗАДАЧИ
// Посчитать общую сумму покупок в корзине

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;
// 1. перебрать массив(получим доступ к елементам)
// 2. до цикла сделать переменну Общую
// 3. каждій елемент приплюсовать

// for( let i = 0; i < cart.length; i +=1){
//     console.log(cart[i]);

//     total += cart[i];
// }

// console.log('Total: ', total);

// якщо непотрібно змінювати данні всередені масиву - можна використати FOR of
//  for (const value of cart) {
//     total += value;
//  }
//  console.log('Total: ', total);

//  Добавить каждому елементу 20% налога

// for (let i = 0; i < cart.length; i += 1) {
//     cart[i] = Math.round(cart[i] * 1.2);
// }
// console.log(cart);


// запишемо через ФУНКЦІЮ для декількох масивів данних

// const cart = [54, 28, 105, 70, 92, 17, 120];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
// console.log('Total: ', total);


const calculateTotalPrice = function (items) {
    console.log('items внутри функции' , items);

    let total = 0; 
    for (const item of items) {
       
        total += item;
    }
    return total;
}

console.log(calculateTotalPrice([1, 8, 98, 54]));
console.log(calculateTotalPrice([28, 105, 70, 92, 17, 120]));

//   можно записть по-другому, с использованием переменной
const result1 = calculateTotalPrice([100, 88, 982, 543]);
console.log(result1);



// із автоперевірки

function getExtremeElements(array) {  
  // Change code below this line

  let ExtremeElements = [array[0], array[array.length - 1]];

return ExtremeElements;
    
  // Change code above this line
}
console.log(getExtremeElements(["Earth", "Mars", "Venus"]));
console.log(getExtremeElements(["apple", "peach", "pear", "banana"]));
console.log(getExtremeElements([1, 2, 3, 4, 5]));


//   просто вивести данні масивів декількох 

const logItems = function (items) {
    for (const item of items) {
        console.log(item);
    }
}

console.log(["Earth", "Mars", "Venus"]);
console.log(["apple", "peach", "pear", "banana"]);
console.log([1, 2, 3, 4, 5]);



// SPLIT для функцій!
  
function splitMessage(message, delimiter) {
  let words;
  // Change code below this line
words = (message.split(delimiter));
  // Change code above this line
  return words;
}
console.log(splitMessage("Mango hurries to the train", " "));
console.log(splitMessage("Mango", ""));
console.log(splitMessage("best_for_week", "_"));

// Із автоперевірки - не працює
// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     let words;
//     let total = 0;
  
//     words = (message.split(" "));
//     total = words.length * pricePerWord;

//     return total;
// }
// console.log(calculateEngravingPrice(["JavaScript is in my blood", 10]));


function slugify(title) {
    // Change code below this line
    let text;
    // let slug;
    text = title.toLowerCase();

    console.log(slugify("Arrays for begginers"));
}