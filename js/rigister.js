// замінити всі літери ена протилежний регістер (маленькі зробити великими і навпаки)

const string = 'JQAZwsxEDC';


// 1 option:

const letters = string.split('');
let invertedString = '';

console.log(letters);

for (const letter of letters) {
    console.log(letter);

    // if(letter === letter.toLowerCase()) {
        
    //     invertedString += letter.toUpperCase();
    // } else {
    //     invertedString += letter.toLowerCase();
    // }
    // можно записати в вигляді тернарного оператора:
    // invertedString += 
    // letter === letter.toLowerCase() 
    // ? letter.toUpperCase()
    // : letter.toLowerCase();

    // цей запис можно зробити більш зрозумілим:

    const isEqual =  letter === letter.toLowerCase();
    invertedString += isEqual ? letter.toUpperCase()
    : letter.toLowerCase();
}
console.log(`invertedString:`, invertedString);




