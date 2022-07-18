
//Вариант 1 с постепенным заполнением вспомогательного массива

cardSuits = ["clubs", "diamonds", "hearts", "spades"];
cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "T"];

allCards = [];

for (i = 0; i < cardValue.length; i++) {
    for (j = 0; j < cardSuits.length; j++) {
        currentCard = [];

        currentCard.push(`<div class="card">`);
            currentCard.push(`<div class="info">${cardValue[i]}<img src="images/${cardSuits[j]}.svg" alt=${cardSuits[j]}></div>`);

            if (cardValue[i] === "J") {
                currentCard.push(`<img class="person" src="images/jack.svg" alt="jack">`);
            } else if (cardValue[i] === "Q") {
                currentCard.push(`<img class="person" src="images/queen.svg" alt="queen">`);
            } else if (cardValue[i] === "K") {
                currentCard.push(`<img class="person" src="images/king.svg" alt="king">`);
            } else if (cardValue[i] === "T") {
                currentCard.push(`<img class="person" src="images/${cardSuits[j]}.svg" alt="${cardSuits[j]}">`);
            }

            currentCard.push(`<div class="info">${cardValue[i]}<img src="images/${cardSuits[j]}.svg" alt=${cardSuits[j]}></div>`);
            currentCard.push(`</div>`);
        allCards.push(currentCard.join(""))
    }
}
document.write(`<div class="wrapper">${allCards.join("")}</div>`);


//Вариант 2 с несколькими document.write

cardSuits = ["clubs", "diamonds", "hearts", "spades"];
cardValue = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "T"];

document.write(`<div class="wrapper">`);

for (i = 0; i < cardValue.length; i++) {
    for (j = 0; j < cardSuits.length; j++) {
        if (cardValue[i] === "J") {
            middleOfCard = `<img class="person" src="images/jack.svg" alt="jack">`;
        } else if (cardValue[i] === "Q") {
            middleOfCard = `<img class="person" src="images/queen.svg" alt="queen">`;
        } else if (cardValue[i] === "K") {
            middleOfCard = `<img class="person" src="images/king.svg" alt="king">`;
        } else if (cardValue[i] === "T") {
            middleOfCard = `<img class="person" src="images/${cardSuits[j]}.svg" alt="${cardSuits[j]}">`;
        } else {
            middleOfCard = "";
        }
        document.write(`<div class="card">
            <div class="info">${cardValue[i]}<img src="images/${cardSuits[j]}.svg" alt=${cardSuits[j]}></div>
             ${middleOfCard}
            <div class="info">${cardValue[i]}<img src="images/${cardSuits[j]}.svg" alt=${cardSuits[j]}></div>
        </div>`);
    }
}
document.write(`</div>`);


