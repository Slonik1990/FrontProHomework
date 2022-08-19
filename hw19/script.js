"use strict";
const HAMBURGER = {
    small: {price: 5, calories: 20},
    big: {price: 10, calories: 40},
    cheese: {price: 1, calories: 20},
    salad: {price: 2, calories: 5},
    potato: {price: 1.5, calories: 10},
    spices: {price: 1.5, calories: 0},
    mayo: {price: 2, calories: 5},
};


class Burger {
    constructor(){
        this.burgerCreator();
    }

    burgerCreator(){
        this.size = prompt("Input size of the burger: big or small");
        this.stuffing = prompt("Input one of the fillings: salad, potato or cheese");
        this.additions = [];
        if (confirm("would you like to add spices?")) this.additions.push("spices");
        if (confirm("would you like to add mayo?")) this.additions.push("mayo");
    }


    setSize(size){
        this.size = size;
    }

    getSize(){
        return this.size;
    }

    setStuffing(stuffing){
        this.stuffing = stuffing;

    }

    getStuffing(){
        return this.stuffing;
    }

    setAdditions(...additions){
        this.additions = additions;
    }

    getAdditions(){
        return this.additions;
    }

    burgerParametersList(){
        const parameters = [];
        parameters.push(this.size, this.stuffing, ...this.additions);
        return parameters;
    }

    burgerTotalPrice(){
        return this.burgerParametersList().reduce(
            function (currentAccum, parameter){
                return ([parameter] in HAMBURGER) ? currentAccum + HAMBURGER[parameter].price : currentAccum;
            }, 0);

        //без проверки на наличие в HAMBURGER
        // return this.burgerParametersList().reduce(
        //     (currentAccum, currentParameter) => currentAccum + HAMBURGER[currentParameter].price,
        //     0);
    }

    burgerTotalCalories(){
        return this.burgerParametersList().reduce(
            function (currentAccum, parameter){
                return ([parameter] in HAMBURGER) ? currentAccum + HAMBURGER[parameter].calories : currentAccum;
            }, 0);

        //без проверки на наличие в HAMBURGER
        // return this.burgerParametersList().reduce(
        //     (currentAccum, currentParameter) => currentAccum + HAMBURGER[currentParameter].calories,
        //     0);
    }

    burgerInfo(){
        return `Your burger costs ${this.burgerTotalPrice()}$;\nYour burger consist ${this.burgerTotalCalories()} calories;`;
    }
}



let myBurger = new Burger();
console.log(myBurger);
console.log(myBurger.burgerParametersList());
console.log(myBurger.burgerInfo());




