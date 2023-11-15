import Swordsman from "../Swordsman";

test ('create Swordsman', () => {
    const result = new Swordsman('Swordsman');

    expect(result).toEqual({
        name: 'Swordsman',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10,
    });
});
