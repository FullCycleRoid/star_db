import React from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import PeoplePage from '../people-page';

import './app.css';

export default class App extends React.Component {

    render() {
        return (
            <div className='container'>
                <Header />
                <RandomPlanet />

                <PeoplePage />
            </div>
        );
    };
};




