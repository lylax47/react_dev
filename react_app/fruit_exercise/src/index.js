import foods from "./foods";
import {choice, remove} from "./helpers";

let currentFruit = choice(foods);
console.log(`I'd like one ${currentFruit}, please`);
console.log(`Here you go: ${currentFruit}`);
console.log(`Delicious. May I have another`);
let removed = remove(foods, currentFruit);
console.log(`I'm sorry, we're all out. We have ${removed.length} left.`);