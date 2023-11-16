import Character from '../Character';

describe('Character', () => {
  test('create valid name and type', () => {
    const character = new Character('Alex', 'Bowman');

    expect(character).toEqual({
      name: 'Alex',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: undefined,
      defence: undefined,
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

  test('level up character', () => {
    const character = new Character('John', 'Daemon');
    character.attack = 50;
    character.defence = 30;
    character.health = 50;

    character.levelUp();

    expect(character).toEqual({
      name: 'John',
      type: 'Daemon',
      health: 100,
      level: 2,
      attack: 60,
      defence: 36,
    });
  });

  test('throw an error when trying to level up a dead character', () => {
    const deadCharacter = new Character('Sean', 'Zombie');
    deadCharacter.health = 0;

    expect(() => deadCharacter.levelUp()).toThrowError('Cannot level up for a dead character');
  });

  test('damage should reduce health based on points and defence', () => {
    const character = new Character('Alice', 'Swordsman');
    character.defence = 20;
    character.damage(30);

    expect(character.health).toBe(76);
  });

  test('take damage and update health', () => {
    const character = new Character('Bob', 'Swordsman');
    character.health = 100;
    character.defence = 10;
    character.damage(50);

    expect(character.health).toBeLessThan(100);
    expect(character.health).toBeGreaterThan(0);
  });

  test('damage should not reduce health below 0', () => {
    const character = new Character('Bob', 'Magician');
    character.health = 10;
    character.damage(50);

    expect(character.health).toBeCloseTo(0);
  });

  test('take damage and set health to 0 if damage exceeds health', () => {
    const character = new Character('Tom', 'Magician');
    character.health = 0;
    character.damage(50);

    expect(character.health).toBe(0);
  });

});
