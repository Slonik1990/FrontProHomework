// Olympic

const sports = [
    ['🤺','fencing'],
    ['⛸','figure skating'],
    ['⛷','skier'],
    ['🏂','snowboarder'],
    ['🏌','golfing'],
    ['🚣','rowing boat'],
    ['🏊','swimming'],
    ['🤸','gymnastics'],
    ['🤾','handball']
];

const winners = [
    ['fencing','gold','fr'],
    ['fencing','silver','it'],
    ['fencing','bronze','us'],

    ['figure skating','gold','ca'],
    ['figure skating','silver','pl'],
    ['figure skating','bronze','us'],

    ['skier','gold','no'],
    ['skier','silver','pl'],
    ['skier','bronze','fr'],

    ['snowboarder','gold','us'],
    ['snowboarder','silver','jp'],
    ['snowboarder','bronze','au'],

    ['golfing','gold','gb'],
    ['golfing','silver','se'],
    ['golfing','bronze','us'],

    ['rowing boat','gold','us'],
    ['rowing boat','silver','gb'],
    ['rowing boat','bronze','ro'],

    ['swimming','gold','us'],
    ['swimming','silver','gb'],
    ['swimming','bronze','au'],

    ['gymnastics','gold','pl'],
    ['gymnastics','silver','pl'],
    ['gymnastics','bronze','ua'],

    ['handball','gold','dk'],
    ['handball','silver','fr'],
    ['handball','bronze','de'],
];

const olympic = ['🔵','⚫','🔴','🟡','🟢']; // EU, Africa, America, Asia, Oceania

const medals = [
    ['🥇','gold'],
    ['🥈','silver'],
    ['🥉','bronze'],
];

const continents = [
    ['fr','Europe'],
    ['it','Europe'],
    ['us','America'],
    ['ca','America'],
    ['pl','Europe'],
    ['no','Europe'],
    ['jp','Asia'],
    ['au','Oceania'],
    ['gb','Europe'],
    ['se','Europe'],
    ['ro','Europe'],
    ['ua','Europe'],
    ['dk','Europe'],
    ['de','Europe']
];

const flags = [
    ['fr','🇫🇷'],
    ['it','🇮🇹'],
    ['us','🇺🇸'],
    ['ca','🇨🇦'],
    ['pl','🇵🇱'],
    ['no','🇳🇴'],
    ['jp','🇯🇵'],
    ['au','🇦🇺'],
    ['gb','🇬🇧'],
    ['se','🇸🇪'],
    ['ro','🇷🇴'],
    ['ua','🇺🇦'],
    ['dk','🇩🇰'],
    ['de','🇩🇪']
];

function renderOlympicCircles() {
    const circles = [];

    for(let i = 0; i < olympic.length; i++) {
        circles.push(`<th>${olympic[i]}</th>`)
    }

    return circles.join("");
}

function getWinnersBySport(sport) {
    const sportWinner = [];

    for(let i = 0; i < winners.length; i++) {
        if(winners[i][0] === sport) sportWinner.push(winners[i]);
    }

    return sportWinner;
}

function getWinnersContinent(country) {
    for(let i = 0; i < continents.length; i++) {
        if(continents[i][0] === country) return continents[i][1]
    }
}

function getFlug(country) {
    for(let i = 0; i < flags.length; i++) {
        if(flags[i][0] === country) return flags[i][1];
    }
}

function getMedal(medal) {
    for(let i = 0; i < medals.length; i++) {
        if(medals[i][1] === medal) return medals[i][0];
    }
}

function renderWinner(winner) {
    return `<div>${getFlug(winner[2])} - ${getMedal(winner[1])}</div>`;
}

function renderTRs() {
    const trs = [];

    for(let i = 0; i < sports.length; i++) {
        const sport = sports[i][1];
        let Europe = [], Africa = [], America = [], Asia = [], Oceania = [];

        let winners = getWinnersBySport(sport);
        console.log(winners);
        for(let j = 0; j < winners.length; j++) {
            let winner = winners[j];
            let winnerCountry = winner[2];
            let winnerContinent = getWinnersContinent(winnerCountry);
            let continentArray = [];
            console.log(winnerContinent);

            switch(winnerContinent) {
                case "Europe":
                    continentArray = Europe;
                    break;
                case `Africa`:
                    continentArray = Africa;
                    break;
                case `America`:
                    continentArray = America;
                    break;
                case `Asia`:
                    continentArray = Asia;
                    break;
                case `Oceania`:
                    continentArray = Oceania;
                    break;
            }

            continentArray.push(renderWinner(winner));
            console.log(continentArray);
        }



        trs.push(`<tr>
			<td>${sports[i][0]}</td>
			<td>${Europe.join("")}</td>
			<td>${Africa.join("")}</td>
			<td>${America.join("")}</td>
			<td>${Asia.join("")}</td>
			<td>${Oceania.join("")}</td>
		</tr>`);
    }
    return trs.join("");
}


document.write(`<table>
	<thead>
		<tr>
			<th></th>
			${renderOlympicCircles()}
		</tr>
	</thead>
	<tbody>
		${renderTRs()}
	</tbody>
</table>`);
