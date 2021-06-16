const { TestWatcher } = require('jest');
const Player = require('../lib/Player');
//imports the Potion() into the test, est Potion as a usuable variable
const Potion = require('../lib/Potion');
//mocks||replaces constructors implementation w/faked data
jest.mock('../lib/Potion');
console.log(new Potion());

test('creates a player object', () => {
    const player = new Player('Dave');

    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.inventory).toEqual(
        expect.arrayContaining([expect.any(Object)])
    );
})