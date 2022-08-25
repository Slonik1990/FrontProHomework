const root = document.querySelector(".root");


function firstLastChildDecorator(startElement, level){
    const parentElements = getParentElementsArray(startElement, level);
    parentElements.forEach((parent) => addingClassesToFirstLastChild(parent));
}

//функция которая рекурсивно вернет массив родительских элементов
//с детишками которых будут происходить изменения
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




