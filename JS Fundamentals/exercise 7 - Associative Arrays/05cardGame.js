function cardGame(data){
    let players = new Map();

    for(let line of data){
        let [playerName, cards] = line.split(": ");
        if(!players.has(playerName)){
            players.set(playerName, new Set());
        } 

        cardsArray = cards.split(", ");
        for(let card of cardsArray){
            players.get(playerName).add(card);
        }
    }

    for(let playerInfo of Array.from(players)){
        let sum = 0;

        for(let card of Array.from(playerInfo[1])){
            let cardInfo = card.split("");
            let type = cardInfo.pop();
            let power = cardInfo.join("");
            
            let value1 = 0;
            let value2 = 0;

            switch (power) {
                case "2": value1 = 2; break;
                case "3": value1 = 3; break;
                case "4": value1 = 4; break;
                case "5": value1 = 5; break;
                case "6": value1 = 6; break;
                case "7": value1 = 7; break;
                case "8": value1 = 8; break;
                case "9": value1 = 9; break;
                case "10": value1 = 10; break;
                case "J": value1 = 11; break;
                case "Q": value1 = 12; break;
                case "K": value1 = 13; break;
                case "A": value1 = 14; break;
            }

            switch (type) {
                case "S": value2 = 4; break;
                case "H": value2 = 3; break;
                case "D": value2 = 2; break;
                case "C": value2 = 1; break;
            }

            sum+= value1*value2;
        }

        console.log(`${playerInfo[0]}: ${sum}`);
    }    

}

cardGame([
    'John: 22C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
    ]
    
    )
