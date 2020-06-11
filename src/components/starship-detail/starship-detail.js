import React from 'react';
import './starship-detail.css';
import SwapiService from '../../service/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

export default class StarshipDetail extends React.Component {

  swapiService = new SwapiService();

    swapiService = new SwapiService();

    state = {
        starship: null,
        loader: true,
        error: false,
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    componentDidMount() {
        this.updateStarship();
    }

    onPlanetLoaded = (starship) => {
        this.setState({
            starship,
            loader: true,
            error: false
        })
    }

    onErrorHandler = (err) => {
        this.setState({
            loader: false,
            error: true,
        })
    }

    updateStarship = () => {
        const id = this.getRandomInt(2, 5)
        this.swapiService
            .getStarship(id)
            .then( this.onPlanetLoaded )
            .catch( this.onErrorHandler );
    }

    render() {

        let { starship, loader, error } = this.state;

        const hasData = !( loader || error );
        const errorIndicator = error? <ErrorIndicator />: null;
        const spinner = loader? <Spinner />: null;
        const content = hasData? < StarshipView starship={ starship } />: null;

        return (
            <div className="card flex-row justify-content-center">
                { spinner }
                { content }
                { errorIndicator }
            </div>
        );
    }
};

const StarshipView = ({ starship }) => {

    const { id, name, length, crew, passengers,
            cargo_capacity, model, cost_in_credits,
            max_atmosphering_speed } = starship;

    return (
        <React.Fragment>
            <img  className="starship-image"
                  src={`https://starwars-visualguide.com/assets/img/starships/${id}.jpg`}
                  alt="" />
            <div className="card-block w-100 px-4 pt-4">
                <h4 className="card-title">{ name }</h4>
                <ul className="list-group starship-list">
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Model:</span>
                            <span>{ model }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Length:</span>
                            <span>{ length }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Crew:</span>
                            <span>{ crew }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Passengers:</span>
                            <span>{ passengers }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Cargo capacity:</span>
                            <span>{ cargo_capacity }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                           <span className='term'>Cost in credits:</span>
                           <span>{ cost_in_credits }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                           <span className='term'>Max atmosphering speed:</span>
                           <span>{ max_atmosphering_speed }</span>
                        </span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
}