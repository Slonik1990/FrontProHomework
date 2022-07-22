const arr1 = [1,2,3, 'hello',4,5];//15
const arr2 = [1,2,3, true, 4, undefined, 6];//16
const arr3 = [true, 4, undefined, 6, null];//10

console.log(innerSumComparing(arr1, arr2));//arr2
console.log(innerSumComparing(arr1, arr3));//arr1
console.log(innerSumComparing(arr2, arr3));//arr2

function innerSumComparing(array1, array2){
    if (arrSumOfNumbers(array1) < arrSumOfNumbers(array2)) return array2;
    return array1;
}

function arrSumOfNumbers(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if(typeof array[i] === "number") sum += array[i];
    }
    return sum;
}
