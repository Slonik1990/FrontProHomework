
possibleOperations = "+,-,/,* ";

do{
    operation = prompt("Укажите одну из допустимых операций" + possibleOperations).trim();
} while (possibleOperations.indexOf(operation) === -1);

do{
    numOfOperands = parseInt(prompt("Укажите желаемое количество операндов от 2 до 6" ));
} while (numOfOperands < 2 || numOfOperands > 6 || isNaN(numOfOperands));

result = 0;
for (let i = 1; i <= numOfOperands ; i++) {
    do{
        currentOperand = parseInt(prompt(`Укажите операнд № ${i}` ));
    } while (isNaN(currentOperand));

    if(i === 1){
        result = currentOperand;
    } else {
        switch (operation){
            case "+":
                result += currentOperand;
                break;
            case "-":
                result -= currentOperand;
                break;
            case "*":
                result *= currentOperand;
                break;
            case "/":
                result /= currentOperand;
                break;
        }
    }
}
alert("В результате вычислений был получен ответ: " + result);