"use strict";

function main(a = 2, b = 3, c) {
    const sumOfArgs = sum(a , b);
    if (typeof c === "function") return c(sumOfArgs);
    return sumOfArgs;
}

function sum(a, b) {
    return a + b;
}
