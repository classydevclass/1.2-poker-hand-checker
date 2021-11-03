import { Deck } from './builders/Deck.js';
import { determinePlayerHand } from './utils/handCheck';

const run = async () => {
    const deck = new Deck();
    const [player1Cards, player2Cards, player3Cards] = await deck.dealCardsToThisManyPlayers(3);
    const tableCards = deck.dealThisManyCardsToTable(7);

    const player1Results = determinePlayerHand([...player1Cards, ...tableCards]);
    const player2Results = determinePlayerHand([...player2Cards, ...tableCards]);
    const player3Results = determinePlayerHand([...player3Cards, ...tableCards]);

    console.log({
        tableCards,
        player1Cards,
        player2Cards,
        player3Cards,
        player1Results,
        p1ResultCards: player1Results.cards,
        player2Results,
        p2ResultCards: player2Results.cards,
        player3Results,
        p3ResultCards: player3Results.cards,
    });
}

run();
