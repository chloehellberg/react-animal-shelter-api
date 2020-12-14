import React from 'react';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';

class AnimalApiHelper extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const {error, isLoading, animals } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Animals</h1>
          <ul>
            {animals.map((animal, index) =>
              <li key={index}>
                <h3>Name: {animal.name}</h3>
                <p><strong>Species:</strong> {animal.species}</p>
                <p><strong>Gender:</strong> {animal.gender}</p>
                <p><strong>Breed:</strong> {animal.breed}</p>
                <p><strong>Age:</strong> {animal.age}</p>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}


const mapStateToProps = state => {
  return {
    animals: state.animals,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(AnimalApiHelper);