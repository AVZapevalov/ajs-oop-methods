import Character from '../Character';

describe('Character', () => {
  test('create valid name and type', () => {
    const character = new Character('Alex', 'Bowman');

    expect(character).toEqual({
      name: 'Alex',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 0,
      defence: 0,
    });
  });

  test('throw an error for invalid name', () => {
    expect(() => new Character('', 'Magician')).toThrowError('Name should be a string with length >1 and <11');
  });

  test('throw an error for invalid type', () => {
    expect(() => new Character('Alice', 'Witch')).toThrowError('Invalid character type');
  });

  test('throw an error for name with length >10', () => {
    const longName = 'SwordsmanSwordsmanSwordsman';
    expect(() => new Character(longName, 'Swordsman')).toThrowError(`Name should be a string with length >1 and <11`);
  });

  test('throw an error for name with length <2', () => {
    const shortName = 'A';
    expect(() => new Character(shortName, 'Undead')).toThrowError(`Name should be a string with length >1 and <11`);
  });
});

