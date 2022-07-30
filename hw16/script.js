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
    let tableRows = [];
    for (let i = 0; i < this.length; i++) {
        let imageName = this[i].name.toLowerCase().replaceAll(" ","");
        tableRows.push(`
            <tr>
                 <td>${this[i].name}</td>
                 <td><img src="images/${directory}/${imageName}.svg" alt="${this[i].name}"></td>
            </tr>
        `)
    }
    tableRows = `<tbody>${tableRows.join()}</tbody>`;
    let tableHeader = `<thead><th>Name</th><th>Icon</th></thead>`
 document.write(`<table>
                    ${tableHeader};
                    ${tableRows};
                </table>`);
}

dcHeroes.heroesRender("dc")
marvelHeroes.heroesRender("marvel")