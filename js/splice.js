


const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
    'Карточка-6',
    'Карточка-7',

];

console.table(cards);

// Удаление по индексу IndexOf

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);

// console.log(index);

// cards.splice(index, 2);
// console.table(cards);


// добавить карточку в начало push или в конец pop
// если в произвольное место(по идексу)) то используем splice
// const cardToInsert = 'Карточка-8';
// // const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.table(cards);


// обновление елементів (по индексу) 


const cardToUpdate = 'Карточка-4';
const index = cards.indexOf(cardToUpdate);

console.log(index);
cards.splice(index, 1, 'Обновленная карточка-4');


// cards.splice(6, 1, 555);

console.table(cards);