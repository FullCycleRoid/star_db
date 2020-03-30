import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {

    render() {
        return (
            <div className="item-list card">
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Luke Skywoker</li>
                    <li className="list-group-item">R2-D2</li>
                    <li className="list-group-item">JabbaHat</li>
                    <li className="list-group-item">Dart Vaider</li>
                    <li className="list-group-item">Palpatin</li>
                </ul>
            </div>
        )
    }
};