// Если аргумент c передан и он является функцией, то он выполняется после вызова функции sum,
// и в качестве входящего значение принимает результат работы функции sum.
// Функция main должна возвращать результат функции аргумента c, если он есть, либо результат функции sum.

function main(a = 2, b = 3, c) {
    sumOfNum = sum(a , b);
    if (typeof c === "function") return c(sumOfNum);
    return sumOfNum;
}

function sum(a, b) {
    return a + b;
}
