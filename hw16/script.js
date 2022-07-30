//железного человека после выполнения задания добавил для доп проверки

let marvelHeroes = [
    {
        name: "Thor"
    },
    {
        name: "Spider Man"
    },
    {
        name: "Deadpool"
    },
    {
        name: "Iron Man"
    }
];
let dcHeroes = [
    {
        name: "Superman"
    },
    {
        name: "Batman"
    },
];

Array.prototype.heroesRender = function (directory) {

    let tableRows = this.map(
        function (item) {
            let imageName = item.name.toLowerCase().replaceAll(" ", "");
            return `<tr>
                         <td>${item.name}</td>
                         <td><img src="images/${directory}/${imageName}.svg" alt="${item.name}"></td>
                    </tr>`
        }
    ).join("");

    tableRows = `<tbody>${tableRows}</tbody>`;
    let tableHeader = `<thead><th>Name</th><th>Icon</th></thead>`

    document.write(`<table>${tableHeader}${tableRows}</table>`);
}

dcHeroes.heroesRender("dc")
marvelHeroes.heroesRender("marvel")