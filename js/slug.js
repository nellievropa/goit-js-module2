// делаем slug в  URL (добавляем заголовок статьи через тире все слова)

// const title = 'Top 10 bennefits of React freamework';
// // console.log(title);

// const normalizedTitle = title.toLowerCase();
// // console.log(normalizedTitle);

// const words = normalizedTitle.split(' ');
// // console.log(words);

// const slug =  words.join('-');
// // console.log(slug);

// // запишем теж саме, але коротше
// // цепочки констант: кожний наступний метод працює на РЕЗУЛЬТАТІ попереднього

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

const slugify = function (string) {
    // привели всебукві к нижнему регистру
//     const normalizedTitle = string.toLowerCase();
//     // разбили строку по разделителям
//     const words = normalizedTitle.split(' ');
// // шили в одну строку з -   
//     const slug = words.join('-');
//     // можна записати все в один рядок
  
//     return slug;

    return string.toLowerCase().split(' ').join('-');
}

console.log(slugify('Top of benefits of React framework'));
console.log(slugify('Azure static Web Apps are Awesom '));
console.log(slugify('Technical writing tips for non-native English speaker'));

// з автоперевірки:

// function slugify(title) {
//   // Change code below this line
// // let words = " ";
// //   let slug;
    
//     function slugify(title) {
//   // Change code below this line
// const totaleInLowerCase = title.toLowerCase();
// 	const array = totaleInLowerCase.split(' ');
// 	return array.join('-');
// }
  
// //   words = title.toLowerCase();
//   slug = [title.toLowerCase().join("-")];

//   return slug;

//   // Change code above this line
// }
// console.log(slug(slugify("Arrays for begginers")));