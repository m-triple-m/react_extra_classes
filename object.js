let hero = {
    name : 'Bruce Wayne',
    power : 'Money',
    heroname : 'Batman',
    age : 45,
    dialogue : () => { console.log('I am Batman!') }
};

console.log(hero.name);
console.log(hero['heroname']);

hero.universe = 'DC';

console.log(hero);

hero.dialogue();

id = "0001";
heroname = "Leon S Kennedy";
age = 34;

let myhero = { id, heroname, age };

console.log(myhero);