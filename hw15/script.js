//с методом assign ознакомился, но реализацию для дз использовал свою, для практики


let obj1 = { x: 10, y: 20 };
let obj2 = { z: 30 };
let obj3 = { x: 10};
let obj4 = { x: 20, y: 30  };

function assignObjects(obj1, obj2){
    const mergedObj = {};
    for (let key in obj1){
        mergedObj[key] = obj1[key];
    }
    for (let key in obj2){
        mergedObj[key] = obj2[key];
    }
    return mergedObj;
}

console.log(assignObjects(obj1,obj2));//{ x: 10, y: 20, z: 30 }
console.log(assignObjects(obj3,obj4));//{ x: 20, y: 30 }

