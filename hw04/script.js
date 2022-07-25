// Реализовать опросник для пользователя.

firstAnswer = prompt("Сколько будет 2+2?");
secondAnswer = prompt("Солнце встает на востоке?");
secondAnswer = secondAnswer.trim().toLowerCase();
thirdAnswer = prompt("Сколько будет 5 / 0?");
fourthAnswer = prompt("Какого цвета небо?");
fourthAnswer = fourthAnswer.trim().toLowerCase();
fifthAnswer = prompt("Какой правильный ответ на главный вопрос жизни, вселенной и всего такого?");

result = 0;

if(+firstAnswer === 4) result += 10;

switch (secondAnswer){
    case "да":
    case "д":
    case "y":
    case "yes":
    case "+":
        result += 10;
        break;
}

if(isNaN(+thirdAnswer)) result += 10;

switch (fourthAnswer){
    case "голубое":
    case "синее":
    case "blue":
        result += 10;
        break;
}

if(+fifthAnswer === 42) result += 10;

alert(`Ваш результат: ${result} баллов.`);

