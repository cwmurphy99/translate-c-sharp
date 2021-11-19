// Put your code here.
console.log("Do you believe in magic?");
console.log("------------------------");

const getAllSpells = () => {

    return [
        {
            Name: "Turn enemy into a newt",
            IsEvil: true,
            EnergyReqired: 5.1
        },
        {
            Name: "Conjure some gold for a local charity",
            IsEvil: false,
            EnergyReqired: 2.99
        },
        {
            Name: "Give a deaf person the ability to heal",
            IsEvil: false,
            EnergyReqired: 12.2
        },
        {
            Name: "Make yourself emperor of the universe",
            IsEvil: true,
            EnergyReqired: 100.0
        },
        {
            Name: "Convince your relatives your political views are correct",
            IsEvil: false,
            EnergyReqired: 2921.5
        }
    ]
}

const allSpells = getAllSpells();

const makeGoodSpellBook = (allSpells) => {
    const goodBook = {}
    goodBook.title = "Good Book",
        goodBook.spells = allSpells.filter(spell => !spell.IsEvil);
    return goodBook;
}

const makeEvilSpellBook = (allSpells) => {
    const evilBook = {}
    evilBook.title = "Evil Book",
        evilBook.spells = allSpells.filter(spell => spell.IsEvil);
    return evilBook;
}

const displaySpellBook = (book) => {
    console.log(book.title);
    for (aSpell of book.spells) {
        console.log(`${aSpell.Name}`);
    }
}

const goodBook = makeGoodSpellBook(allSpells);
const evilBook = makeEvilSpellBook(allSpells);
displaySpellBook(evilBook)
displaySpellBook(goodBook)