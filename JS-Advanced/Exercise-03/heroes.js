function createHero() {

    const canCast = (hero) => ({
        cast: (spell) => {
            console.log(`${hero.name} cast ${spell}`);
            hero.mana--;
        }
    });

    const canFight = (hero) => ({
        fight: () => {
            console.log(`${hero.name} slashes the foe!`);
            hero.stamina--;
        }
    });
    
    const fighter = (name) => {
        let hero = {
            name,
            stamina: 100,
            health: 100,
        }

        return Object.assign(hero, canFight(hero));
    }

    const mage = (name) => {
        let hero = {
            name,
            mana: 100,
            health: 100,
        }

        return Object.assign(hero, canCast(hero));
    }
    
    return {mage: mage, fighter: fighter};
}

let create = createHero();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball")

scorcher.cast("thunder")

scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight()

console.log(scorcher2.stamina);

console.log(scorcher.mana);
