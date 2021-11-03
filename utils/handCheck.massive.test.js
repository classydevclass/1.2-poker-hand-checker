"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testWithTooManyPlayers = void 0;
const Deck_js_1 = require("../builders/Deck.js");
const handCheck_1 = require("./handCheck");
const testWithTooManyPlayers = async () => {
    const deck = new Deck_js_1.Deck();
    const [player1Cards, player2Cards, player3Cards, player4Cards, player5Cards, player6Cards, player7Cards, player11Cards, player12Cards, player13Cards, player14Cards, player15Cards, player16Cards, player17Cards] = await deck.dealCardsToThisManyPlayers(14);
    const tableCards = deck.dealThisManyCardsToTable(7);
    const player1Results = (0, handCheck_1.determinePlayerHand)([...player1Cards, ...tableCards]);
    const player2Results = (0, handCheck_1.determinePlayerHand)([...player2Cards, ...tableCards]);
    const player3Results = (0, handCheck_1.determinePlayerHand)([...player3Cards, ...tableCards]);
    const player4Results = (0, handCheck_1.determinePlayerHand)([...player4Cards, ...tableCards]);
    const player5Results = (0, handCheck_1.determinePlayerHand)([...player5Cards, ...tableCards]);
    const player6Results = (0, handCheck_1.determinePlayerHand)([...player6Cards, ...tableCards]);
    const player7Results = (0, handCheck_1.determinePlayerHand)([...player7Cards, ...tableCards]);
    const player11Results = (0, handCheck_1.determinePlayerHand)([...player11Cards, ...tableCards]);
    const player12Results = (0, handCheck_1.determinePlayerHand)([...player12Cards, ...tableCards]);
    const player13Results = (0, handCheck_1.determinePlayerHand)([...player13Cards, ...tableCards]);
    const player14Results = (0, handCheck_1.determinePlayerHand)([...player14Cards, ...tableCards]);
    const player15Results = (0, handCheck_1.determinePlayerHand)([...player15Cards, ...tableCards]);
    const player16Results = (0, handCheck_1.determinePlayerHand)([...player16Cards, ...tableCards]);
    const player17Results = (0, handCheck_1.determinePlayerHand)([...player17Cards, ...tableCards]);
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
        break8: '-----------------',
        player11Cards,
        player11Results,
        p11ResultCards: player11Results.cards,
        break9: '-----------------',
        player12Cards,
        player12Results,
        p12ResultCards: player12Results.cards,
        break11: '-----------------',
        player13Cards,
        player13Results,
        p13ResultCards: player13Results.cards,
        break12: '-----------------',
        player14Cards,
        player14Results,
        p14ResultCards: player14Results.cards,
        break13: '-----------------',
        player15Cards,
        player15Results,
        p15ResultCards: player15Results.cards,
        break14: '-----------------',
        player16Cards,
        player16Results,
        p16ResultCards: player16Results.cards,
        break15: '-----------------',
        player17Cards,
        player17Results,
        p17ResultCards: player17Results.cards,
    });
};
exports.testWithTooManyPlayers = testWithTooManyPlayers;
//# sourceMappingURL=handCheck.massive.test.js.map