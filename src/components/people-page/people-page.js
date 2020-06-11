import React from 'react';
import ItemList from '../item-list/';
import PersonDetail from '../person-detail/';
import SwapiService from '../../service/swapi-service';


export default class PeoplePage extends React.Component {

    swapiService = new SwapiService();

    state = {
        selectedPersonId: null
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPersonId: id
        })
    }

    render() {
        return (
            <div className='row mt-2'>
                <div className='col-md-6'>
                    <ItemList
                      onSelected={ this.onPersonSelected }
                      getData={ this.swapiService.getPeople }
                      renderLabel={(item) => `${item.name}(${item.gender})` } />
                </div>
                <div className='col-md-6'>
                    <PersonDetail
                      personId={ this.state.selectedPersonId }
                      getData={ this.swapiService.getPerson } />
                </div>
            </div>
        )
    }
}