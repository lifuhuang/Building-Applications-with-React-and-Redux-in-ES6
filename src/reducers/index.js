import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
  courses //ES6's shorthand property name. This is equal to "courses: courses"
});

export default rootReducer;
