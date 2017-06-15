import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

const rootReducer = combineReducers({
  courses, //ES6's shorthand property name. This is equal to "courses: courses"
  authors
});

export default rootReducer;
