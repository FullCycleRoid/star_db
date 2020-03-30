import React from 'react';
import './random-planet.css';

export default class PersonDetail extends React.Component {

    render() {
        return (
                <div className="random-planet card">
                            <img className='planet-image'
                            src={'https://starwars-visualguide.com/assets/img/planets/5.jpg'}
                            alt='planet'/>
                            <div className="card-body">
                                <h5 className="card-title">Naboo</h5>
                                <p className="card-text">Population: 300000</p>
                                <p className="card-text">Nation: Mandolorian</p>
                            </div>
                        <div>
                    </div>
                </div>
        )
    }
};