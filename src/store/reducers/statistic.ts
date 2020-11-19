import { IStatstic } from '../../types';
import { START_FETCHING, STOP_FETCHING, GET_USER_STATS } from '../actions/types';

const initialState = {
  userStats: [] as IStatstic[],
  name: '',
  isLoading: false,
};

export default function statisticReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USER_STATS:
      return {
        ...state,
        userStats: action.data,
      };
    case START_FETCHING:
      return {
        ...state,
        isLoading: true,
      };
    case STOP_FETCHING:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
