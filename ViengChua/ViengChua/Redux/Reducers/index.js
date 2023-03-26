import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
const ReducerUser = combineReducers({
  User: UserReducer,
});
export default (state, action) => ReducerUser(state, action);
