import Bowman from './Bowman';
import Swordsman from './Swordsman';
import Magician from './Magician';
import Undead from './Undead';
import Zombie from './Zombie';
import Daemon from './Daemon';

const bowman = new Bowman('Legolas');
const swordsman = new Swordsman('Aragorn');
const magician = new Magician('Saruman');
const undead = new Undead('Durin');
const zombie = new Zombie('Orc');
const daemon = new Daemon('Balrog');

console.log(bowman);
console.log(swordsman);
console.log(magician);
console.log(undead);
console.log(zombie);
console.log(daemon);
