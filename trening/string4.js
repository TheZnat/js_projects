//Реализуйте и экспортируйте по умолчанию функцию, которая получает на вход строку и считает, сколько символов
// (без учёта повторяющихся символов) использовано в этой строке. Например, в строке yy используется всего один символ — y. А в строке 111yya! — используется четыре символа: 1, y, a и !.
// Примеры
// const text1 = 'yyab'; // y, a, b
// countUniqChars(text1); // 3
//
// const text2 = 'You know nothing Jon Snow';
// countUniqChars(text2); // 13
//
// // Если передана пустая строка, то функция должна вернуть `0`
// const text3 = '';
// countUniqChars(text3); // 0

let countUniqChars = (string) => {
    let uniqArrayString = [];

    for (let char of string){
        if(!uniqArrayString.includes(char)){ // если нет такого пукемона в массиве, то добавлям
            uniqArrayString.push(char);
        }
    }
    return uniqArrayString.length
}

const text1 = 'yyab'; // y, a, b
console.log(countUniqChars(text1)); // 3

const text2 = 'You know nothing Jon Snow';
console.log(countUniqChars(text2)); // 13

// Если передана пустая строка, то функция должна вернуть `0`
const text3 = '';
console.log(countUniqChars(text3)); // 0