import Phaser from 'phaser';

// Place sprite class, which is the sprite for a place
export default class PlaceSprite extends Phaser.GameObjects.Sprite {

    public readonly name: string;

    // Constructor
    constructor(scene: Phaser.Scene, name: string, image: string, x: number, y: number) {

        super(scene, x, y, image);

        this.name = name;

        this.setInteractive();

        this.on('pointerdown', this.click);


    }

    // Trigger an event when the sprite was clicked
    click(): void {
        console.log('IT WAS CLICKED!');
    }

}