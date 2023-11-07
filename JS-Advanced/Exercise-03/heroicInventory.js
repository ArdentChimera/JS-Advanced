function heroicInventory(data) {
    let result = [];
    for (const el of data) {
        let[heroName, heroLevel, items] = el.split(' / ');
        items = items ? items.split(', ') : [];
        let heroObj = {
            name: heroName,
            level: Number(heroLevel),
            items: items
        }

        result.push(heroObj);
    }

    console.log(JSON.stringify(result));
}

heroicInventory(['Isacc / 25 / Apple, GravityGun',

'Derek / 12 / BarrelVest, DestructionSword',

'Hes / 1 / Desolator, Sentinel, Antara']);