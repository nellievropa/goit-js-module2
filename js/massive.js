
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
//1. перебрать массив(получим доступ к елементам)
//2. до цикла сделать переменну Общую
//3. каждій елемент приплюсовать

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
