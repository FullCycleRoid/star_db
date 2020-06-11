import React from 'react';
import './planet-detail.css';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export default class planetDetail extends React.Component {

  swapiService = new SwapiService();

  constructor() {
        super();
        this.updatePlanet ();
  }

    swapiService = new SwapiService();

    state = {
        planet: {},
        loader: true,
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loader: false
        })
    }

    onErrorHandler = (err) => {

    }

    updatePlanet = () => {
        let id = this.getRandomInt(1, 50)
        this.swapiService
        .getPlanet(id)
        .then( this.onPlanetLoaded )
        .catch( this.onErrorHandler )
    }

    render() {

        const { planet, loader, error } = this.state;

        const hasData = !( loader || error );
        const errorIndicator = error? <ErrorIndicator />: null;
        const spinner = loader? <Spinner />: null;
        const content = hasData? <PlanetView planet={ planet } />: null

        return (
            <div className="card flex-row justify-content-center">
                { spinner }
                { content }
                { errorIndicator }
            </div>
        )
    }
};

const PlanetView = ({ planet }) => {

    const { id, name, diameter, population, rotation_period,
            gravity, climate, terrain, surface_water } = planet;

    return (
        <React.Fragment>
            <img  className="planet-image"
                  src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                  alt="" />
            <div className="card-block w-100 px-4 pt-4">
                <h4 className="card-title">{ name }</h4>
                <ul className="list-group planet-list">
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Diameter:</span>
                            <span>{ diameter }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Population:</span>
                            <span>{ population }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Gravity:</span>
                            <span>{ gravity }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Rotation period:</span>
                            <span>{ rotation_period }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                           <span className='term'>Terrain:</span>
                           <span>{ terrain }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                           <span className='term'>Surface_water:</span>
                           <span>{ surface_water }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                       <span>
                           <span className='term'>Climate:</span>
                           <span>{ climate }</span>
                       </span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}