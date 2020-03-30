import React from 'react';
import './person-detail.css';

export default class PersonDetail extends React.Component {

    render() {
        return (
            <div className='card'>

                        <img className='my-image'
                              src={'https://starwars-visualguide.com/assets/img/characters/3.jpg'}
                              alt='person'/>
                        <div className='card-body'>
                            <h5>R2-D2</h5>
                            <ul className='list-group list-group-flush'>
                                <li className='list-group-item'>
                                    <span className="term">Gender</span>
                                    <span>Male</span>
                                </li>
                                <li className='list-group-item'>
                                    <span className="term">Age</span>
                                    <span>43</span>
                                </li>
                                <li className='list-group-item'>
                                    <span className="term">Eye color</span>
                                    <span>Red</span>
                                </li>
                            </ul>

                    </div>
                </div>
        )
    }
};