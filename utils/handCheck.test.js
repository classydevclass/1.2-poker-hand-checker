"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testRoyalFlush = void 0;
const Card_1 = require("../builders/Card");
const types_1 = require("../lib/types");
const handCheck_1 = require("./handCheck");
const testRoyalFlush = () => {
    const result1 = (0, handCheck_1.determinePlayerHand)([
        new Card_1.Card(14, types_1.Suit.C),
        new Card_1.Card(13, types_1.Suit.C),
        new Card_1.Card(12, types_1.Suit.C),
        new Card_1.Card(11, types_1.Suit.C),
        new Card_1.Card(10, types_1.Suit.C)
    ]);
    const result2 = (0, handCheck_1.determinePlayerHand)([
        new Card_1.Card(10, types_1.Suit.D),
        new Card_1.Card(11, types_1.Suit.D),
        new Card_1.Card(14, types_1.Suit.D),
        new Card_1.Card(12, types_1.Suit.D),
        new Card_1.Card(13, types_1.Suit.D)
    ]);
    const result3 = (0, handCheck_1.determinePlayerHand)([
        new Card_1.Card(10, types_1.Suit.D),
        new Card_1.Card(8, types_1.Suit.H),
        new Card_1.Card(11, types_1.Suit.D),
        new Card_1.Card(14, types_1.Suit.D),
        new Card_1.Card(12, types_1.Suit.D),
        new Card_1.Card(2, types_1.Suit.D),
        new Card_1.Card(13, types_1.Suit.D)
    ]);
    console.log({
        test: 'should discover a Royal Flush in any order',
        result1Title: result1.title === types_1.HandTitles.ROYALFLUSH,
        result2Title: result2.title === types_1.HandTitles.ROYALFLUSH,
        result3Title: result3.title === types_1.HandTitles.ROYALFLUSH,
        result3NumCards: result3.cards.length === 5,
        result3CardSuit: result3.cards.filter(card => card.suit === types_1.Suit.D).length === 5,
        result3CardValues: result3.cards.map(card => card.value).toString() === [14, 13, 12, 11, 10].toString()
    });
};
exports.testRoyalFlush = testRoyalFlush;
//# sourceMappingURL=handCheck.test.js.map