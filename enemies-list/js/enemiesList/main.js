// Put your code here


const createEnemy = (firstName, lastName, offenses, isReallyHated) => {
    return {
        firstName: firstName,
        lastName: lastName,
        offenses: offenses,
        addOffense: (offense) => {
            this.offenses.push(offense);
        },
        isReallyHated: isReallyHated,
    };
};


const joshua = createEnemy("Joshua", "Flowers", ["Being a jerk to me in elemetary school", "Not being nice to me in elementary school."], true);

const darth = createEnemy("Darth", "Vader", ["Cut off Luke's hand", "Murdered all those kids", "Unkind management practices."], true);

const betty = createEnemy("Betty", "Rudelady", ["Phone calls in the theater",
    "Phone calls on the bus",
    "Phone calls in line at the grocery store",
    "Poor conversationalist"], true);

const leon = createEnemy("Leon", "Peck", ["Keeps giving me a hotplate"], false);

const enemies = [joshua, darth, betty, leon];

for (let enemy of enemies) {
    if (enemy.isReallyHated) {
        console.log(enemy.firstName, enemy.lastName, "(Really, really dislike!)")
    }
    else {
        console.log(enemy.firstName, enemy.lastName);
    }
}