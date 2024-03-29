//Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих скобок разных типов, и проверяет, является ли эта строка сбалансированной. Открывающие и закрывающие скобки должны быть одного вида. Пустая строка (отсутствие скобок) считается сбалансированной.
//
// Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:
//
// Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
// Скобки должны закрываться в правильном порядке.

let isValid = (expression) => {
    let stack = [];
    let brackets = {
        ')': '(',
        '}': '{',
        ']': '[',
        '>': '<'
    };

    for (let i = 0; i < expression.length; i++) {
        let current = expression[i];

        if (isClosedBracket(current)) {
            if (brackets[current] !== stack.pop())
                return false;
        } else {
            stack.push(current);

        }
    }
    return stack.length === 0;
}
let isClosedBracket = (expression) => {
    return [')', '}', ']', '>'].indexOf(expression) > - 1;
}

console.log(isValid('(())'));
console.log(isValid('((())'));

