// найти логин
// если логин есть - "User [login] is finded "
// если логина нет - "User [login] is not finded "


// const logins = ['dfdretefd', 'mnkjiuuyjh', 'qwqeqewrwre', 'popolkkjhiuj', 'zxzxzsaxz'];
// const loginToFind = 'popolkkjhiuj';
// let message = `User ${loginToFind} is not finded !!!!`;

// for(let i = 0; i < logins.length; i +=1 ) {
//     const login = logins[i];

//     console.log(`Login: `, login);

// //     if (login !== loginToFind) {
// //         message = `User ${loginToFind} is not finded `;
// //     } else {
// //         message = `User ${loginToFind} is finded !!!!`;
// //     }
// // //    не работает, потому что цикл не прерівается и он перебирает все до конца
// // }
// // console.log(message);

// // нужно делать наоборот
// if (login === loginToFind) {
//     message = `User ${loginToFind} is finded `;
//     break;
// }

// }
// console.log(message);

// можно записать через FOR OF

// for (const login of logins) {
//     console.log(`Login: `, login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Ура равни!!!');
//         message = `User ${loginToFind} is finded `;
//         break;
//     }
    
// }
// console.log(message);


// ще краще використовувати Include -але він видать тільки тру ор фальсе

// console.log(logins.includes('popolkkjhiuj')); --шукаєм конкретний логин
// console.log(logins.includes(loginToFind));

// приклад тернарної операції
// const a = 15 > 10 ? 'ara' : 'нет';

// console.log(a);

// приклад як її використовувати для перебору масивів

// const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;

// console.log(message);


// Перетворюємо для функций

// const logins = ['dfdretefd', 'mnkjiuuyjh', 'qwqeqewrwre', 'popolkkjhiuj', 'zxzxzsaxz'];


// const findLogin = function (allLogins, loginToFind) {
//     // console.log(allLogins);
//     // console.log(loginToFind);

//     // let message = `Пользователь ${loginToFind}  не найден.`; - цю строку можно просто вивести в кінці в ретурн
 

//     for (const login of allLogins) {
//         if(login === loginToFind) {
//             // message = `Пользователь ${loginToFind} найден.`; -єта строка равна следующей по сути
//             return `Пользователь ${loginToFind} найден.`;
//         }
//     }
//     return `Пользователь ${loginToFind}  не найден.`;
// };

// запишемо через тернарник :

// const findLogin = function (allLogins, loginToFind) {
//     // const message = allLogins.includes(loginToFind) - а взагалі можно зробити так 
//     return allLogins.includes(loginToFind)
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;
    
//     return message;

// }



// console.log(findLogin(logins, 'dfdreтreretefd'));
// console.log(findLogin(logins, 'mnkjiuuyjh'));
// console.log(findLogin(logins, 'qwqeqewrwre'));
// console.log(findLogin(logins, 'popolkmdmddmkjhiuj'));
// console.log(findLogin(logins, 'zxzxzsaxz'));




// const firstArray = ["Mango", "Poly"];
// const secondArray = ["Ajax", "Chelsea"];
// const maxLength = 3;

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//    let makeArray = firstArray.concat(secondArray);
    
//     return makeArray;

// //   for (makeArray.length > maxLength) {
// //     return makeArray.maxLength;
// //   }
// // return makeArray;

//     // Change code above this line
//   }


// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line
// console.log(allClients);

// із автоперевірки 

function findLongestWord(string) {
    // Change code below this line
  const word = string.split(" ");
  console.log(word);
  let longestWord = '';
  
  for (let i = 0; i <= word.length - 1; i += 1){
     if (word[i].length > longestWord.length) {
   longestWord = word[i];
    // console.log(longestWord);
 
  } longestWord = longestWord;
  //   console.log(word[i+1]);
  }
 return longestWord;
  // Change code above this line
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

function createArrayOfNumbers(min, max) {
    const numbers = [];
       let ArrayOfNumbers = numbers[min];
    // Change code below this line
  for (let i = min; i <= max; i += 1) {
    ArrayOfNumbers = [numbers.push(i)];
  }
    // Change code above this line
    return numbers;
  }
console.log(createArrayOfNumbers(1, 3));
console.log(createArrayOfNumbers(14, 17));