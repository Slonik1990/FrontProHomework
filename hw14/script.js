const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30,
    },

}

// //Вариант 1 без рекурсии, сработает при одном уровне вложенности
// //Задачу ДЗ выполняет
function convert_1(object) {
    let newObj = {};
    for(let key in object) {
        if(typeof object[key] === 'object') {
            for(let innerKey in object[key]) {
                newObj[innerKey] = object[key][innerKey]
            }
        } else {
            newObj[key] = object[key];
        }
    }
    return newObj;
};


//Вариант 2 с рекурсией и доп функцией, работает с любым колличеством уровней вложенности
function convert_2(object){
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

//Вариант 3 чисто для себя
// с доп параметром, куда вторым можно передать объект в который разложится первый
function convert_3(object, target = {}) {
    for(let key in object) {
        if(typeof object[key] === 'object') {
            convert_3(object[key],target);
        } else {
            target[key] = object[key];
        }
    }
    return target;
}
console.log(convert_1(obj));//{ x: 20, y: 20, z: 30, k: 23, p: 13 }
console.log(convert_2(obj));//{ x: 20, y: 20, z: 30, k: 23, p: 13 }
console.log(convert_3(obj, {a:1}));//{ a: 1, x: 20, y: 20, z: 30, k: 23, p: 13 }
