import Phaser from 'phaser';
// import World from "../helper/World";
import Place from "../sprites/Place";


// "Game" scene: Scene for the main game
export default class WorldScene extends Phaser.Scene {

    private gameWidth!: number;
    private gameHeight!: number;

    // Constructor
    constructor() {
        super({
            key: 'World'
        });
    }

    /// Initialize parameters
    init(): void {

        // get game width and height
        this.gameWidth = Number(this.sys.game.config.width);
        this.gameHeight = Number(this.sys.game.config.height);

    }

    // Creates all objects of this scene
    create(): void {

        // const world: World = new World();
        //
        // let posX = 1;
        // let posY = 1;

        // for (let i = 0; i < world.cities.length; i++) {
        //
        //     i % 2 === 0? posX = 1: posX = 2;        // select x position
        //     posY = Math.ceil((i + 1) / 2);       // select y position
        //
        //     let text: Phaser.GameObjects.Text = this.add.text(
        //         this.gameWidth * 0.33 * posX,
        //         this.gameHeight * 0.33 * posY,
        //         world.cities[i].name,
        //         {
        //         fontFamily: 'Courier',
        //         fontSize: '50px',
        //         color: '#000000',
        //         fontStyle: 'bold',
        //         backgroundColor: '#ffffff'
        //     });
        //
        // }

        const worldMapData: object = this.cache.json.get('worldMap');

        console.log(Object.values(worldMapData.World).length);

        this.add.existing(new Place(this, 'Place 1', 'place1', 160, 85));

    }

    // Update function for the game loop.
    update(_time: number, _delta: number): void {       // remove underscore if time and delta is needed


    }

}