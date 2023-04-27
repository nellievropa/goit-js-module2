// найти логин 
// если логин есть - "User [login] is finded "
// если логина нет - "User [login] is not finded "


const logins = ['dfdretefd', 'mnkjiuuyjh', 'qwqeqewrwre', 'popolkkjhiuj', 'zxzxzsaxz'];
const loginToFind = 'popolkkjhiuj';
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

const message = logins.includes(loginToFind) ? `Пользователь ${loginToFind} найден` : `Пользователь ${loginToFind} не найден`;

console.log(message);