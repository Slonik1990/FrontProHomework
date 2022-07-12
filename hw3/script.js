// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом).
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
// Посчитать сумму факториалов* чисел которые попадаются во время перебора.


//сознательно не испольозовал parseInt, чтобы случайный ввод буквы вместо цифры не создал другое число

do {
    a = +prompt("Ввведите значение a");
} while (isNaN(a) || a < 1);

do {
    b = +prompt(`Ввведите значение b, которое больше, чем ${a}`);
} while (isNaN(b) || a >= b);

do {
    h = +prompt(`Ввведите значение h, которое не больше ${b - a}`);
} while (isNaN(h) || b - a < h);

processedNumbers = "";
totalFactorial = 0;

for (let i = a; i <= b; i += h) {
    factorialOfCurrentNumber = 1;
    for (let j = 1; j <= i; j++) {
        factorialOfCurrentNumber *= j;
    }
    processedNumbers += `${+i} `
    totalFactorial += factorialOfCurrentNumber;
}

console.log(`Были высчитаны факториалы для следущих числ: ${processedNumbers}`);
console.log(`Сумма их факториалов: ${totalFactorial}`);
