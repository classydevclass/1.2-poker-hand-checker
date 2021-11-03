"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testWithSomePlayers = void 0;
const Deck_js_1 = require("../builders/Deck.js");
const handCheck_1 = require("./handCheck");
const testWithSomePlayers = async () => {
    const deck = new Deck_js_1.Deck();
    const [player1Cards, player2Cards, player3Cards] = await deck.dealCardsToThisManyPlayers(3);
    const tableCards = deck.dealThisManyCardsToTable(7);
    const player1Results = (0, handCheck_1.determinePlayerHand)([...player1Cards, ...tableCards]);
    const player2Results = (0, handCheck_1.determinePlayerHand)([...player2Cards, ...tableCards]);
    const player3Results = (0, handCheck_1.determinePlayerHand)([...player3Cards, ...tableCards]);
    console.log({
        tableCards,
        break1: '-----------------',
        player1Cards,
        player1Results,
        p1ResultCards: player1Results.cards,
        break2: '-----------------',
        player2Cards,
        player2Results,
        p2ResultCards: player2Results.cards,
        break3: '-----------------',
        player3Cards,
        player3Results,
        p3ResultCards: player3Results.cards,
    });
};
exports.testWithSomePlayers = testWithSomePlayers;
//# sourceMappingURL=handCheck.players.test.js.map