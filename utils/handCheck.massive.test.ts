import { Card } from '../builders/Card';
import { Deck } from '../builders/Deck.js';
import { Suit } from '../lib/types';
import { determinePlayerHand } from './handCheck';

export const testWithTooManyPlayers = async () => {
    const deck = new Deck();
    const [player1Cards, player2Cards, player3Cards, player4Cards, player5Cards, player6Cards, player7Cards,
        player11Cards, player12Cards, player13Cards, player14Cards, player15Cards, player16Cards, player17Cards] = await deck.dealCardsToThisManyPlayers(14);
    const tableCards = deck.dealThisManyCardsToTable(7);

    const player1Results = determinePlayerHand([...player1Cards, ...tableCards]);
    const player2Results = determinePlayerHand([...player2Cards, ...tableCards]);
    const player3Results = determinePlayerHand([...player3Cards, ...tableCards]);
    const player4Results = determinePlayerHand([...player4Cards, ...tableCards]);
    const player5Results = determinePlayerHand([...player5Cards, ...tableCards]);
    const player6Results = determinePlayerHand([...player6Cards, ...tableCards]);
    const player7Results = determinePlayerHand([...player7Cards, ...tableCards]);
    const player11Results = determinePlayerHand([...player11Cards, ...tableCards]);
    const player12Results = determinePlayerHand([...player12Cards, ...tableCards]);
    const player13Results = determinePlayerHand([...player13Cards, ...tableCards]);
    const player14Results = determinePlayerHand([...player14Cards, ...tableCards]);
    const player15Results = determinePlayerHand([...player15Cards, ...tableCards]);
    const player16Results = determinePlayerHand([...player16Cards, ...tableCards]);
    const player17Results = determinePlayerHand([...player17Cards, ...tableCards]);

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
}
