import faker from 'faker';
import cowsay from 'cowsay';

const animal = faker.animal.cat();
console.log(animal);

console.log(cowsay.say({
    text : "React is awesome!",
    e : "oO",
    T : "U "
}));