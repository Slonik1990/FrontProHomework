/*
* Реализовал задачу через получение массива родительских элементов, у которых потомки находятся на
* необходимом уровне вложенности и последующее применение изменений к каждому родителю из массива.
*
* Можно было поступить чуть иначе и сразу в переборе применять изменения и не собирать никакой массив,
* но в выбранном подходе мне понравилась возможность переиспользования функции получения массива
* родителей для других задач*/



const root = document.querySelector(".root");

function firstLastChildDecorator(startElement, level){
    const parentElements = getParentElementsArray(startElement, level);
    parentElements.forEach((parent) => addingClassesToFirstLastChild(parent));
}

function getParentElementsArray(start, level){
    const parents = [];
    if (level === 1) {
        parents.push(start);
    } else {
        [...start.children].forEach(function (item){
            parents.push(...getParentElementsArray(item, level - 1));
        });
    }
    return parents;
}

function addingClassesToFirstLastChild(parentElement){
    parentElement.firstElementChild.classList.add("first");
    parentElement.lastElementChild.classList.add("last");
}

firstLastChildDecorator(root,2);


//развлечения
function redGreenCleaner(current){
    if (current.children.length) {
        current.classList.remove("first");
        current.classList.remove("last");
        [...current.children].forEach(function (child){
            redGreenCleaner(child);
        });
    } else {
        current.classList.remove("first");
        current.classList.remove("last");
    }
}
root.onclick = function (){
    redGreenCleaner(root);
    const randomLevel = Math.ceil(Math.random()*3);
    firstLastChildDecorator(root, randomLevel);
}




