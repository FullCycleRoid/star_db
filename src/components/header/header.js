import React from 'react';
import './header.css';

export default class Header extends React.Component {

    render() {
        return (
                <div className=''>
                    <ul className='nav nav-pills align-items-end'>
                        <li className='nav-item brand'>
                            <a href='#' className='nav-link'>Star db</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link'>Planet</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link'>Person</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#' className='nav-link'>Person</a>
                        </li>
                    </ul>
                </div>
        )
    }
};