import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header';
import ItemList from './components/item-list';
import PersonDetail from './components/person-detail';
import PlanetDetail from './components/planet-detail';
import StarshipDetail from './components/starship-detail';
import RandomPlanet from './components/random-planet';

import './index.css';

export default class App extends React.Component {
    render() {
        return (
            <div className='star-db'>
                <Header />
                <RandomPlanet />
                <div className='row mt-2'>
                    <div className='col-md-4'>
                        <ItemList />
                    </div>
                    <div className='col-md-8'>
                        <PersonDetail/>
                    </div>
                </div>
            </div>
        );
    };
};



ReactDOM.render(<App />, document.getElementById('root'));


const getResource = async (url) => {
    const res = await fetch(url);
    const body = await res.json();

    return body
}

getResource('https://swapi.co/api/people/1/')
    .then((body) => {
        console.log(body)
    });

