const Player = require('../lib/Player')
// const Potion = require('../lib/Potion')

// jest.mock('../lib/Potion')
// console.log(new Potion())

test('creates a player object', () => {
    const player = new Player('Dave')

    expect(player.name).toBe('Dave')
    expect(player.health).toEqual(expect.any(Number))
    expect(player.strength).toEqual(expect.any(Number))
    expect(player.agility).toEqual(expect.any(Number))
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]))
})

test('gets player\'s stats as an objects', () => {
    const player = new Player('Dave')

    expect(player.getStatus()).toHaveProperty('potions')
    expect(player.getStatus()).toHaveProperty('health')
    expect(player.getStatus()).toHaveProperty('strength')
    expect(player.getStatus()).toHaveProperty('agility')
})

test('gets inventory from player or return false', () => {
    const player = new Player('Dave')

    expect(player.getInventory()).toEqual(expect.any(Array))

    player.inventory = []

    expect(player.getInventory()).toEqual(false)
})

