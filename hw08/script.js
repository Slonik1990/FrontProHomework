
hero = ['Ivan'];
native = ['York','Of'];
destination = ['Poltava','In'];

rainbow = hero.concat(native).concat(destination);         //['Ivan', 'York', 'Of', 'Poltava', 'In']
rainbow.reverse();                                         //['In', 'Poltava', 'Of', 'York', 'Ivan']
rainbow.splice(0, 2, "Richard");       //['Richard', 'Of', 'York', 'Ivan']
rainbow.splice(rainbow.length- 1, 1, "Gave", "Battle", "In", "Vain");
console.log(rainbow);                                      //['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain']

colors = ["red", "orange", "yellow", "green", "blue", "midnightblue", "violet"];

document.write(`<div class = "wrapp">`);
for (let i = 0; i < colors.length; i++) {
    document.write(`<div class = "card">`);
        document.write(`<div class = "circle" style = "background-color:${colors[i]}"></div>`);
        document.write(`<div>${rainbow[i]}</div>`);
    document.write(`</div>`);
}
document.write(`</div>`);