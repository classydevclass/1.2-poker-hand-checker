import { Card } from '../builders/Card';
import { Deck } from '../builders/Deck.js';
import { HandTitles, Suit } from '../lib/types';
import { determinePlayerHand } from './handCheck';

export const testRoyalFlush = () => {
    const result1 = determinePlayerHand([
        new Card(14, Suit.C),
        new Card(13, Suit.C),
        new Card(12, Suit.C),
        new Card(11, Suit.C),
        new Card(10, Suit.C)
    ]);

    const result2 = determinePlayerHand([
        new Card(10, Suit.D),
        new Card(11, Suit.D),
        new Card(14, Suit.D),
        new Card(12, Suit.D),
        new Card(13, Suit.D)
    ]);

    const result3 = determinePlayerHand([
        new Card(10, Suit.D),
        new Card(8, Suit.H),
        new Card(11, Suit.D),
        new Card(14, Suit.D),
        new Card(12, Suit.D),
        new Card(2, Suit.D),
        new Card(13, Suit.D)
    ]);

    console.log({
        test: 'should discover a Royal Flush in any order',
        result1Title: result1.title === HandTitles.ROYALFLUSH,
        result2Title: result2.title === HandTitles.ROYALFLUSH,
        result3Title: result3.title === HandTitles.ROYALFLUSH,
        result3NumCards: result3.cards.length === 5,
        result3CardSuit: result3.cards.filter(card => card.suit === Suit.D).length === 5,
        result3CardValues: result3.cards.map(card => card.value) === [14, 13, 12, 11, 10]
        // result3CardValues: result3.cards.map(card => card.value).toString() === [14, 13, 12, 11, 10].toString()
    });
}
