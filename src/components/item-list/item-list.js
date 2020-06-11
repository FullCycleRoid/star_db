import React, { Component } from 'react';
import './item-list.css';
import Spinner from '../spinner';


export default class ItemList extends Component {

    state = {
        peopleList: null,
    }

    componentDidMount() {
        const { getData } = this.props;

        getData()
          .then((peopleList) => {
              this.setState({
                  peopleList
              })
          })
    }

    itemList = (arr) => {
        return arr.map((item) => {
            const { id } = item;
            const label = this.props.renderLabel(item);
            return (
                <li className='list-group-item'
                    key={ id }
                    onClick={() => this.props.onSelected(id)}>
                    { label }
                </li>
            )
        });
    }

    render() {

        const { peopleList } = this.state;
        if ( !peopleList ) {
            return <Spinner />
        }

        const items = this.itemList(peopleList);

        return (
            <div className="card">
                <ul className="list-group list-group-flush w-100">
                    { items }
                </ul>
            </div>
        )
    }
};