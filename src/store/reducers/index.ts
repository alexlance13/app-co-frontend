import { combineReducers } from 'redux';
import tableReducer from './table';
import statisticReducer from './statistic';

export default combineReducers({
  statistic: statisticReducer,
  table: tableReducer,
});
