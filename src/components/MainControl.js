import React from 'react';
import AnimalApiHelper from './AnimalApiHelper';
import Homepage from './Homepage';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
import { makeApiCall } from '../actions';

class MainControl extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    console.log("Handle click reached");
    const { dispatch } = this.props;
    const action = a.toggleAnimalShowing();
    dispatch(action);
    const action2 = a.toggleHomepageShowing();
    dispatch(action2);
    }

    componentDidMount() {
      const { dispatch } = this.props;
      dispatch(makeApiCall());
    }
    
  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.animalPageShowing) {
      currentlyVisibleState = <AnimalApiHelper callApi={this.props.animalApiHelper} animals={this.props.animals}/>  
      buttonText = "Return to Homepage";
    } else {
      currentlyVisibleState = <Homepage />
      buttonText = "View Animals";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-outline-dark" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}
  
MainControl.propTypes = {
    animalPageShowing: PropTypes.bool,
    homePageShowing: PropTypes.bool,
    animals: PropTypes.object
    //animals: PropTypes.object,
    // isLoading: PropTypes.bool,
    // error: PropTypes.string
  };

  const mapStateToProps = state => {
    return {
      animalPageShowing: state.animalPageShowing,
      homePageShowing: state.homePageShowing,
      animals: state.animals,
      // isLoading: state.isLoading,
      // error: state.error
    }
  }

MainControl = connect(mapStateToProps)(MainControl);

export default MainControl;