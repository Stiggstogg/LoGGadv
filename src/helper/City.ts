import Place from '../sprites/Place'

// City class
export default class City {

    public readonly name: string;          // name of the city
    private readonly places: Place[];       // places in the city
    private readonly pictureName: string;   // name of the image which should be used for this city
    private readonly travelTime: integer;   // time to travel to this city in minutes


    // Constructor
    constructor(name: string, pictureName: string, travelTime: integer) {

        this.name = name;
        this.places = [];
        this.pictureName = pictureName;
        this.travelTime = travelTime;

    }

    // Add a place
    addPlace(place: Place): void {

        this.places.push(place);

    }

    // Show where you are (city and properties)
    whereAmI(): void {
        console.log('City: ' + this.name);
        console.log('Picture: ' + this.pictureName);
        console.log('Travel: ' + this.travelTime);
        console.log('Places: \n--------\n');

        this.places.forEach((place: Place): void => {
            console.log(place.name);
        });

    }


}