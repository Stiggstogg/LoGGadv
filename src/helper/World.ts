// World class
import City from "./City";
import Place from "./Place";

export default class World {

    public readonly cities: City[];       // cities in the world

    // Constructor
    constructor() {

        this.cities = [];

        // Create four cities with four places
        for (let c = 0; c < 4; c++) {

            let cityname: string = 'City ' + c;
            let citypicname: string = cityname + '-pic';
            let citytravel: integer = c;

            this.cities.push(new City(cityname, citypicname, citytravel));

            for (let p = 0; p < 4; p++) {

                let placename: string = 'Place ' + c + '-' + p;

                this.cities[c].addPlace(new Place(placename));

            }
        }

    }


}