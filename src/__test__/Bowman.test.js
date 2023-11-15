import Bowerman from "../Bowman";

test ('create Bowman', () => {
    const result = new Bowerman('Bowman');

    expect(result).toEqual({
        name: 'Bowman',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25,
    });
});
