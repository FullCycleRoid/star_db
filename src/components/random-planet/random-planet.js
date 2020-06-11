import React from 'react';
import './random-planet.css';
import SwapiService from '../../service/swapi-service';
import ReactImageFallback from "react-image-fallback";
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class RandomPlanet extends React.Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loader: true,
        error: false,
    }

    componentDidMount() {
        const interval = setInterval(this.updatePlanet, 5000);
    }

    componentWillUnmount() {
        clearInterval( this.interval );
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loader: false,
        });
    };

    onErrorHandler = (err) => {
        this.setState({
            loader:false,
            error:true,
        })
    };

    updatePlanet = () => {
        let id = this.getRandomInt(1, 20)
        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onErrorHandler);
    };

    render() {

        const { planet, loader, error } = this.state;

        const hasData = !(loader || error )
        const errorIndicator = error? <ErrorIndicator />:null;
        const spinner = loader? <Spinner /> : null;
        const content = hasData? <PlanetView planet = { planet } /> : null;

        return (
            <div className="random-planet card justify-content-center align-items-center">
                { spinner }
                { content }
                { errorIndicator }
            </div>
        )
    }
};

const PlanetView = ({ planet }) => {

    const { id, name, population,
            rotation_period, diameter} = planet;

    return (
        <React.Fragment>
            <ReactImageFallback
                src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                fallbackImage="fallback.jpg"
                initialImage="fallback.jpg"
                alt="fallback.jpg"
                className="planet-image" />

            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <div className='card-block'>
                    <span className="card-text border-style d-flex ">
                        <span className='term'>Population:</span>
                        <span >{ population }</span>
                    </span>

                    <span className="card-text border-style d-flex">
                        <span className='term'>Rotation period:</span>
                        <span> { rotation_period }</span>
                    </span>

                    <span className="card-text border-style d-flex">
                        <span className='term'>Diameter:</span>
                        <span>{ diameter }</span>
                    </span>
                </div>
            </div>
        </React.Fragment>
    )
}