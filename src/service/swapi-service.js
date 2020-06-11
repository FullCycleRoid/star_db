
export default class SwapiService {

    _api_base = 'https://swapi.co/api/';

    getResource = async (url) => {
        let res = await fetch(`${this._api_base}${url}`);

        if (!res.ok) {
            throw new Error('This is error young padavan')
        }

        return await res.json();
    }

    getPlanets = async() => {
        let planets = await this.getResource('planets/')
        return planets.results.map(this._transformPlanet)
    }

    getPlanet = async(id) => {
        const planet = await this.getResource(`planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getPeople = async() => {
        const people = await this.getResource('people/')
        return people.results.map(this._transformPerson)
    }

    getPerson = async(id) => {
        const person = await this.getResource(`people/${id}/`)
        return this._transformPerson(person)
    }

    getStarships = async() => {
        const starships = await this.getResource('starships/')
        return starships.results.map(this._transformStarship)
    };

    getStarship = async(id) => {
        const starship = await this.getResource(`starships/${id}/`)
        return this._transformStarship(starship)
    };

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }

    _transformPlanet = (planet) => {

        return {
            id: this._extractId(planet),
            name: planet.name,
            diameter: planet.diameter,
            rotation_period: planet.rotation_period,
            population: planet.population,
            surface_water: planet.surface_water,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
        };
    }

    _transformPerson = (person) => {

        return {
            id: this._extractId(person),
            gender: person.gender,
            name: person.name,
            birth_year: person.birth_year,
            eye_color: person.eye_color,
            mass: person.mass,
            height: person.height,
        };
    }

    _transformStarship = (starship) => {

        return {
            id: this._extractId(starship),
            name: starship.name,
            length: starship.length,
            crew: starship.crew,
            cost_in_credits: starship.cost_in_credits,
            passengers: starship.passengers,
            cargo_capacity: starship.cargo_capacity,
        };
    }
}