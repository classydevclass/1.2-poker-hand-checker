"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testWithManyPlayers = void 0;
const Deck_js_1 = require("../builders/Deck.js");
const handCheck_1 = require("./handCheck");
const testWithManyPlayers = async () => {
    const deck = new Deck_js_1.Deck();
    const [player1Cards, player2Cards, player3Cards, player4Cards, player5Cards, player6Cards, player7Cards] = await deck.dealCardsToThisManyPlayers(7);
    const tableCards = deck.dealThisManyCardsToTable(7);
    const player1Results = (0, handCheck_1.determinePlayerHand)([...player1Cards, ...tableCards]);
    const player2Results = (0, handCheck_1.determinePlayerHand)([...player2Cards, ...tableCards]);
    const player3Results = (0, handCheck_1.determinePlayerHand)([...player3Cards, ...tableCards]);
    const player4Results = (0, handCheck_1.determinePlayerHand)([...player4Cards, ...tableCards]);
    const player5Results = (0, handCheck_1.determinePlayerHand)([...player5Cards, ...tableCards]);
    const player6Results = (0, handCheck_1.determinePlayerHand)([...player6Cards, ...tableCards]);
    const player7Results = (0, handCheck_1.determinePlayerHand)([...player7Cards, ...tableCards]);
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
        break4: '-----------------',
        player4Cards,
        player4Results,
        p4ResultCards: player4Results.cards,
        break5: '-----------------',
        player5Cards,
        player5Results,
        p5ResultCards: player5Results.cards,
        break6: '-----------------',
        player6Cards,
        player6Results,
        p6ResultCards: player6Results.cards,
        break7: '-----------------',
        player7Cards,
        player7Results,
        p7ResultCards: player7Results.cards,
    });
};
exports.testWithManyPlayers = testWithManyPlayers;
//# sourceMappingURL=handCheck.many.test.js.map