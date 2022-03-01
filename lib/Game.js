const inquirer = require('inquirer')
const Player = require('./Player')
const Enemy = require('./Enemy')

function Game() {
    this.roundNumber = 0
    this.isPlayerTurn = 0
    this.enemies = []
    this.currentEnemy
    this.player
}

Game.prototype.initializeGame = function () {
    this.enemies.push(new Enemy('goblin', 'sword'))
    this.enemies.push(new Enemy('orc', 'baseball bat'))
    this.enemies.push(new Enemy('skeleton', 'axe'))

    this.currentEnemy = this.enemies[0]

    inquirer.prompt(
        {
            type: 'text',
            name: 'name',
            message: 'What is your name?'
        }
    ).then(({ name }) => {
        this.player = new Player(name)

        this.newStartBattle()
    })
}

module.exports = Game