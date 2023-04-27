// Сшити всі елеименти ряда в одну строку через кому

// const friends = ["Mango", "Kiwi", "Poly", "Ajax"];
// let string = '';

// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// // console.log(string.slice(0, string.length -1));
// // console.log(string.length);
// console.log(string);


// метод масіва Join

const friends = ["Mango", "Kiwi", "Poly", "Ajax"];

// const string = friends.join('===');
const string = friends.join(', ');
console.log(string);
