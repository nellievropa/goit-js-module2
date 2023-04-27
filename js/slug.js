// делаем slug в  URL (добавляем заголовок статьи через тире все слова)

const title = 'Top 10 bennefits of React freamework';
// console.log(title);

const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);

const words = normalizedTitle.split(' ');
// console.log(words);

const slug =  words.join('-');
// console.log(slug);

// запишем теж саме, але коротше
// цепочки констант: кожний наступний метод працює на РЕЗУЛЬТАТІ попереднього

const slug1 = title.toLowerCase().split(' ').join('-');

console.log(slug1);