"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Deck_js_1 = require("./builders/Deck.js");
const handCheck_1 = require("./utils/handCheck");
const run = async () => {
    const deck = new Deck_js_1.Deck();
    const [player1Cards, player2Cards, player3Cards] = await deck.dealCardsToThisManyPlayers(3);
    const tableCards = deck.dealThisManyCardsToTable(7);
    const player1Results = (0, handCheck_1.determinePlayerHand)([...player1Cards, ...tableCards]);
    const player2Results = (0, handCheck_1.determinePlayerHand)([...player2Cards, ...tableCards]);
    const player3Results = (0, handCheck_1.determinePlayerHand)([...player3Cards, ...tableCards]);
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
};
run();
//# sourceMappingURL=index.js.map