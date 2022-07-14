sports = [
    ['skier','⛷'],
    ['snowboarder','🏂'],
    ['apple','🍎'],
    ['hockey','🏒'],
    ['ice skate','⛸'],
    ['swimmer','🏊'],
    ['surfer','🏄‍'],
    ['watermelon','🍉'],
    ['lemon','🍋'],
    ['rowboat','🚣'],
    ['bicyclist','🚴‍']
];

summer_sports = sports.slice(0,5);
winter_sports = sports.slice(5,sports.length);
fruits = summer_sports.splice(2, 1);
fruits = fruits.concat(winter_sports.splice(2, 2));

console.log("*** Winter sports ***");
for (let i = 0; i < winter_sports.length; i++) {
    console.log(`${winter_sports[i][0]}: ${winter_sports[i][1]}`);
}
console.log("\n*** Summer sports ***");
for (let i = 0; i < summer_sports.length; i++) {
    console.log(`${summer_sports[i][0]}: ${summer_sports[i][1]}`);
}
console.log("\n*** Fruits ***");
for (let i = 0; i < fruits.length; i++) {
    console.log(`${fruits[i][0]}: ${fruits[i][1]}`);
}
