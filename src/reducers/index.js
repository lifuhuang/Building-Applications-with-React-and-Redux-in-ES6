import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, //ES6's shorthand property name. This is equal to "courses: courses"
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
