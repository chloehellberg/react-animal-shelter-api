import animalsVisibleReducer from './animals-visible-reducer';
import homepageVisibleReducer from './homepage-visible-reducer';
import animalsReducer from './animals-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  animalPageShowing: animalsVisibleReducer,
  homepageShowing: homepageVisibleReducer,
  // animals: animalsReducer,
  animals: animalsReducer
  // error: animalsReducer,
  // isLoading: animalsReducer
});

export default rootReducer;

// my discord is crazy, i'm updating. i couldn't hear anything. see you tomorrow