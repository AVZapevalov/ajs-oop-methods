export default class Character {
    constructor(name, type) {
      if (typeof name !== 'string' || name.length < 2 || name.length > 10) {
        throw new Error('Name should be a string with length >1 and <11');
      }
  
      const validTypes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
      if (!validTypes.includes(type)) {
        throw new Error('Invalid character type');
      }
  
      this.name = name;
      this.type = type;
      this.health = 100;
      this.level = 1;
      this.attack = 0;
      this.defence = 0;
    }
  }
