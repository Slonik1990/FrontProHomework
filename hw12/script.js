function copy(list, callback) {
    let newList = [];
    if (typeof callback === "function") {
        for (let i = 0; i < list.length; i++) {
            newList.push(callback(list[i]));
        }
    } else {
        newList = list.slice();
    }
    return newList;
}


//проверки
function itemToString(item){
    return  item.toString();
}
function itemToBool(item){
    return  Boolean(item);
}

const testArray = [0, 1, 2, 3];
const arr1 = copy(testArray);
console.log(arr1);//[0, 1, 2, 3]
const arr2 = copy(testArray, itemToString);
console.log(arr2);//['0', '1', '2', '3']
const arr3 = copy(testArray, itemToBool);
console.log(arr3);//[false, true, true, true]