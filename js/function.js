// const add = function (x, y) {
//     console.log(x);
//     console.log(y);

//     const result = x + y;
//     console.log('x + y =', result);

//     console.log('Виконується функція add');
//     return result;
// };
// const r1 = add(2, 3);
// console.log('r1: ', r1);

// const r2 =  add(15, 65);
// console.log('r2: ', r2);

// const r3 = add(1, 64);
// console.log('r3: ', r3);

// const r4 = add(39, 7);
// console.log('r4: ', r4);




// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
  
    
  
//     if (password === ADMIN_PASSWORD) {
//       return "Welcome!";
//     } 
//       return "Access denied, wrong password!";
  
  
//   }


//   function checkStorage(available, ordered) {
//     // Change code below this line
  
  
//     if (ordered === 0) {
//      return "Your order is empty!";
//     } else if (ordered > available) {
//      return "Your order is too large, not enough goods in stock!";
//     } else {
//         return "The order is accepted, our manager will contact you";
//     }
     
//     }
//   console.log();


//   const fn = function (value) {
//     console.log(1);

//     console.log(2);

//     if (value < 50) {
//         return 'Меньше чем 50';
//     } else 
//  return 'Больше чем 50';
    

//     console.log(3);

//   };

//   console.log( 'Результат функции: ', fn(10));

//   console.log( 'Результат функции: ', fn(1000));

const fnA = function() {
    console.log('Виконується функція А');

    fnB();
};

const fnB = function() {
    console.log('Виконується функція В');


    fnC();
};

const fnC = function() {
    console.log('Виконується функція С');

  
};
// console.log('Лог перед викликом А');
fnA();
// console.log('Лог після виклика А');
// fnB();

// fnC();
