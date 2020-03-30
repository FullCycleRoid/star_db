import React from 'react';
import './header.css';

export default class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark">
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                       <span className="navbar-toggler-icon"></span>
                 </button>
                    <a href="#" className="navbar-brand">Star db</a>
                    <div className='collapse navbar-collapse'>

                        <div className='navbar-nav ml-5'>
                            <a href="#" className="nav-item nav-link">Planets</a>
                            <a href="#" className="nav-item nav-link">Person</a>
                            <a href="#" className="nav-item nav-link">Starships</a>
                    </div>
                </div>
             </nav>
        )
    }
};