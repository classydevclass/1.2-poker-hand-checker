import { testWithManyPlayers } from './utils/handCheck.many.test';
import { testWithTooManyPlayers } from './utils/handCheck.massive.test';
import { testWithSomePlayers } from './utils/handCheck.players.test';
import { testRoyalFlush } from './utils/handCheck.test';

const run = () => {
    // testWithSomePlayers();
    // testWithManyPlayers();
    // testWithTooManyPlayers();
    testRoyalFlush();
}

run();
