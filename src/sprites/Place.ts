import Phaser from 'phaser';
import PlaceSprite from "./PlaceSprite";

// Place class which combines a sprite and a text
export default class Place extends Phaser.GameObjects.Container {

    public readonly name: string;

    // Constructor
    constructor(scene: Phaser.Scene, name: string, image: string, x: number, y: number) {

        super(scene, x, y);

        this.name = name;

        this.addSprite(image);          // create sprite
        this.addText(name);             // add the text

    }

    // add sprite
    addSprite(image: string) {

        this.add(new PlaceSprite(this.scene,this.name,image,0,0));

    }

    // add text
    addText(name: string) {

        this.add(new Phaser.GameObjects.Text(this.scene, 0, -60, name, {
            fontFamily: 'Courier',
            fontSize: '30px',
            color: '#ffffff',
            fontStyle: 'bold'
        }).setOrigin(0.5, 0.5));

    }

}