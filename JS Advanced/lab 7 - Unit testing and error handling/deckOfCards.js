function printDeckOfCards(cards){
    function createCard(face, suit) {
    const faces = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        'J',
        'Q',
        'K',
        'A',
    ]

    const suits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663',
    }

    if (faces.includes(face) == false) {
        throw new TypeError('Invalid face')
    } else if (suit in suits == false) {
        throw new TypeError('Invalid suit')
    }

    const result = {
        face,
        suit, toString() {
            return this.face + suits[this.suit];
        }
    };

    return result;
}

    let deck = [];

    for(let card of cards){
        let [face, suit] = card.split('');

        try{
            createCard(face,suit).toString();
        }catch(error){
            console.log(`Invalid card: ${face}${suit}`);
            return;
        }

    }

    return deck.join(' ');
    
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])
