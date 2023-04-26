// найти логин 
// если логин есть - "User [login] is finded "
// если логина нет - "User [login] is not finded "


const logins = ['dfdretefd', 'mnkjiuuyjh', 'qwqeqewrwre', 'popolkkjhiuj', 'zxzxzsaxz'];
const loginToFind = 'popolkkjhiuj';
let message = `User ${loginToFind} is not finded !!!!`;

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

for (const login of logins) {
    console.log(`Login: `, login);
    console.log(`${login} === ${loginToFind}: `, login === loginToFind);

    if (login === loginToFind) {
        console.log('Ура равни!!!');
        message = `User ${loginToFind} is finded `;
        break;
    }   
    
}
console.log(message);