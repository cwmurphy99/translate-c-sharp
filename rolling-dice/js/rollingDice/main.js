// Put your code here
const rollTheDice = (max) => {
    return Math.floor(Math.random() * max)
};

for (i = 0; i < 10; i++) {
    let die1 = rollTheDice(6);
    let die2 = rollTheDice(6);

    if (die1 == die2) {
        console.log(die1 + " + " + die2 + " == " + (die1 + die2) + " DOUBLES!");
    }
    else {
        console.log(die1 + " + " + die2 + " == " + (die1 + die2));
    }
}