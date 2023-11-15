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

    levelUp() {
      if (this.health <= 0) {
        throw new Error('Cannot level up for a dead character');
      }

      this.level += 1;
      this.attack += Math.round(this.attack * 0.2);
      this.defence += Math.round(this.defence * 0.2);
      this.health = 100;
    }
    
    damage(points) {
      if (this.health > 0) {
        this.health = Math.max(this.health - points * (1 - this.defence / 100), 0);
      }
    }
}
