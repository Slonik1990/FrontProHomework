
//                  1) Функция конструктор и добавление свойств  прототипу


function Human(){ //функция конструктор со свойствами, которые будут доступны экземплярам Human
    this.age = 29;
}

let Vova = new Human();//создание экземпляра

console.log(Human);//функция Human()
console.log(Human.prototype);//содержимое прототипа - только конструктор и прототип прототипа (Object)
console.log(Vova);//экземпляр со своим полем возраст и прототипом в котором конструктор и прототип прототипа (Object)

Human.prototype.run = function (){//добавление в прототип функции run, прошлые вызовы составов объекта преобразились
    let time = 10;
    if (this.smoking) time *= 2;
    return time;
};

console.log(Human);//функция Human()
console.log(Human.prototype);//содержимое прототипа - функция run, конструктор и прототип прототипа (Object)
console.log(Vova);//экземпляр со своим полем возраст и прототипом в котором конструктор и run и прототип прототипа (Object)
console.log(Vova.run());//10


//              -----------попытки изменить конструктор-------------
Human.city = "Odessa";//не сработало
console.log(Vova);//Одессы нет
Human.age = 11;//не сработало
console.log(Vova.age);//29
let Jora = new Human();
console.log(Jora);//строится по первоначальной версии функции конструктора
console.log(Human);//первоначальная версия


//                 2) Создание наследования в функции конструкторе

//                  сначала все как было у Вовы

function Woman(name, smoking, child){//функция конструктор со свойствами, которые будут доступны только экземплярам Woman
    this.name = name;
    this.smoking = smoking;
    this.child = child;
}
let Alina = new Woman("Alina", true, true);//создание женщины

console.log(Woman);//функция Woman()
console.log(Woman.prototype);//содержимое прототипа Woman - только конструктор и прототип прототипа (Object)
console.log(Alina);//экземпляр со своими полями и прототипом в котором конструктор и прототип прототипа (Object)

//     ---------***            а теперь фокусы        ***--------------

Woman.prototype = Object.create(Human.prototype);//подстановка прототипа содержащего RUN
let Anna = new Woman("Anna", true, true);//создание женщины после замены прототипа

console.log(Woman);//функция Woman()
console.log(Woman.prototype);//содержимое прототипа как у Human - функция run, конструктор и прототип прототипа (Object)
console.log(Alina);//!!!!!!экземпляр был создан ДО замены прототипа, поэтому тут прототип Woman, без RUN!!!!!!!!!
console.log(Anna);//!!!!!!экземпляр был создан ПОСЛЕ замены прототипа, поэтому тут прототип Human, с RUN!!!!!!!!!

console.log(Anna.run());//20

Woman.prototype.run = function (){//переопределение run
    let time = Human.prototype.run.call(this);//сначала выплнится из Human, но с текущими аргументами
    if (this.child) time *= 3;
    return time;
};

console.log(Anna.run());//60 функция переопределилась для раннего образца


// !!!!!!!!!!!ВАЖНО:  изменения прототипов воздействуют на ранние экземпляры, а замена не распространяется на ранее созданные
//!!!!!!!!!!!ВАЖНО:   менять функции конструкторы как обычне объекты нельзяб при этом функции у прототипом - можно


