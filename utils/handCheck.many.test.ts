import { Card } from '../builders/Card';
import { Deck } from '../builders/Deck.js';
import { Suit } from '../lib/types';
import { determinePlayerHand } from './handCheck';

export const testWithManyPlayers = async () => {
    const deck = new Deck();
    const [player1Cards, player2Cards, player3Cards, player4Cards, player5Cards, player6Cards, player7Cards] = await deck.dealCardsToThisManyPlayers(7);
    const tableCards = deck.dealThisManyCardsToTable(7);

    const player1Results = determinePlayerHand([...player1Cards, ...tableCards]);
    const player2Results = determinePlayerHand([...player2Cards, ...tableCards]);
    const player3Results = determinePlayerHand([...player3Cards, ...tableCards]);
    const player4Results = determinePlayerHand([...player4Cards, ...tableCards]);
    const player5Results = determinePlayerHand([...player5Cards, ...tableCards]);
    const player6Results = determinePlayerHand([...player6Cards, ...tableCards]);
    const player7Results = determinePlayerHand([...player7Cards, ...tableCards]);

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
}
