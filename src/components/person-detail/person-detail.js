import React from 'react';
import './person-detail.css';
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

export default class PersonDetail extends React.Component {

    state = {
        person: null,
        loader: true,
        error: false,
    }

    componentDidMount() {
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if (this.props.personId !== prevProps.personId) {
               this.updatePerson();
               this.setState({
                    loader:true
                })
        }
    }

    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    onPlanetLoaded = (person) => {
        this.setState({
            person,
            loader: false,
         })
    }

    onErrorHandler = (err) => {
        this.setState({
            error: true,
            loader: false,
        })
    }

    updatePerson = () => {
        const { personId } = this.props;
        if (!personId) {
            return (
                    this.setState({
                        loader:false
                    })
            )
    }

        const { getData } = this.props;
        getData(personId)
          .then( this.onPlanetLoaded )
          .catch( this.onErrorHandler );
    }

    render() {

        const { person, loader, error } = this.state;

        const hasData = !( loader || error );
        const errorIndicator = error? <ErrorIndicator />: null;
        const spinner = loader? <Spinner />: null;
        const content = hasData? <PersonView person = { person }/>: null

        return (
            <div className="card flex-row justify-content-center">
                { spinner }
                { content }
                { errorIndicator }
            </div>
        )
    }
};

const PersonView = ({ person }) => {

    if ( person == null ) {
        return <span>Select person to get information</span>
    }

    const { id, name, gender, birth_year,
            eye_color, mass, height } = person;


    return (
        <React.Fragment>
            <img  className="person-image"
                      src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                      alt="" />
            <div className="card-block w-100 px-4 pt-4">
                <h4 className="card-title">{ name }</h4>
                <ul className="list-group person-list">
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Gender:</span>
                            <span>{ gender }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Mass:</span>
                            <span>{ mass }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                            <span className='term'>Height:</span>
                            <span>{ height }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                        <span>
                           <span className='term'>Birth year:</span>
                           <span>{ birth_year }</span>
                        </span>
                    </li>
                    <li className="list-group-item">
                       <span>
                           <span className='term'>Eye color:</span>
                           <span>{ eye_color }</span>
                       </span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}