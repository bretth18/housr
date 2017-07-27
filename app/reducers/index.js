import { combineReducers } from 'redux';
// import appData from './dataReducer';
// import nav from './navReducer';
import auth from './auth';

const rootReducer = combineReducers({
  auth
});


export default rootReducer
