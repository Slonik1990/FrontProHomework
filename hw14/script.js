

// Object, delete user.age

// const user = {
//   name: "Sasha",
//   lastName: "Dontsova",
//   age: 26,
//   isCat: true,
//   nameOfCat: ["Siri", "Mars"],
//   husband: {
//     name: "Illia",
//     lastName: "Dontsov",
//     age: 27,
//     parents: {
//       mother: {
//         name: "abcde",
//         age: 40,
//       },
//       father: {
//         name: "zxcvb",
//         age: 50,
//       }
//     }
//   }
// };

// console.log(user.name);
// console.log(user.lastName);
// console.log(user.nameOfCat[1]);
// console.log(user.husband.parents.mother.age);

// let users = [
//   {
//     name: "Artem",
//     age: 25,
//     email: "dffgh@dd.com",
//   },
//   {
//     name: "Anton",
//     age: 27,
//     email: "kjewf23@dd.com",
//   },
//   {
//     name: "Anna",
//     age: 20,
//     email: "jkewf000@dd.com",
//   },
//   {
//     name: "Kristina",
//     age: 23,
//     email: "dsjkwfekjbw122@dd.com",
//   },
// ];

// users.forEach(
//   function(item) {
//     if(item.age > 23) {
//       document.write(`
//         <p>Имя: ${item.name} - врозслый</p>
//       `)
//     } else {
//       document.write(`
//         <p>Имя: ${item.name} - подросток</p>
//       `)
//     }
//   }
// )


// let animal = {
//   type: "Lion",
//   age: 8,
//   color: "white"
// };

// animal.name = "Mufasa";
// animal.teritory = "Africa";

// let key = "africa country";
// animal[key] = "Tanzaniia";

// delete animal.age;
// delete animal.name;

// console.log(animal);

// const animal = {
//     type: "Lion",
//     age: 8,
//     color: "white",
//     food: {
//         meat: ["Antilopa", "Kozel"],
//         vegatables: "Cabbage",
//     }
// };
//
// animal.name = "Mufasa";
//
// console.log(animal);
// // debugger;
// // for(let key in animal) {
// //   if(key === "age") {
// //     console.log(`Humane age - ${animal[age] * 4}`);
// //   }
// // }
//
//
// const arr = [1, 23, 78, 123];
//
// console.log(arr);





















// let user = {
//   __proto__: {
//     constructor: ƒ Object()
//     hasOwnProperty: ƒ hasOwnProperty()
//     isPrototypeOf: ƒ isPrototypeOf()
//     propertyIsEnumerable: ƒ propertyIsEnumerable()
//     toLocaleString: ƒ toLocaleString()
//     toString: ƒ toString()
//     valueOf: ƒ valueOf()
//     __defineGetter__: ƒ __defineGetter__()
//     __defineSetter__: ƒ __defineSetter__()
//     __lookupGetter__: ƒ __lookupGetter__()
//     __lookupSetter__: ƒ __lookupSetter__()
//     __proto__: (...)
//     get __proto__: ƒ __proto__()
//     set __proto__: ƒ __proto__()
//   }
// }

// let arr = [

//   __proto__: {
//     map: function(){},
//     push: function(){},
//     __proto__: {
//       constructor: ƒ Object()
//       hasOwnProperty: ƒ hasOwnProperty()
//       isPrototypeOf: ƒ isPrototypeOf()
//       propertyIsEnumerable: ƒ propertyIsEnumerable()
//       toLocaleString: ƒ toLocaleString()
//       toString: ƒ toString()
//       valueOf: ƒ valueOf()
//       __defineGetter__: ƒ __defineGetter__()
//       __defineSetter__: ƒ __defineSetter__()
//       __lookupGetter__: ƒ __lookupGetter__()
//       __lookupSetter__: ƒ __lookupSetter__()
//       __proto__: (...)
//       get __proto__: ƒ __proto__()
//       set __proto__: ƒ __proto__()
//     }
//   }
// ]