// Exercise 04: Slime World
// Name: Keaton Shawhan
// Date: 11/17/23

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 320,
    height: 240,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    zoom: 2,
    scene: [ Overworld ]
}

const game = new Phaser.Game(config)