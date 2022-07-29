const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30,
    },
    foo2: {
        k: 23, p: 13,
    }
}

// //Вариант 1 без рекурсии, сработает при одном уровне вложенности
// //Задачу ДЗ выполняет
// function convert(object) {
//     let newObj = {};
//     for(let key in object) {
//         if(typeof object[key] === 'object') {
//             for(let innerKey in object[key]) {
//                 newObj[innerKey] = object[key][innerKey]
//             }
//         } else {
//             newObj[key] = object[key];
//         }
//     }
//     return newObj;
// };


//Вариант 2 с рекурсией, работате с любым колличеством уровней вложенности
function convert(object){
    let result = {};
    recordIterator(object, result);
    return result;
}
function recordIterator(object, currentState) {
    for(let key in object) {
        if(typeof object[key] === 'object') {
            recordIterator(object[key],currentState);
        } else {
            currentState[key] = object[key];
        }
    }
}


console.log(convert(obj))
