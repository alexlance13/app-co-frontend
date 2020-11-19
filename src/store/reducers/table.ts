import { IStatstic, IUser } from '../../types';
import { START_FETCHING, STOP_FETCHING, GET_USERS, GET_USER_STATS } from '../actions/types';

const initialState = {
  users: [] as IUser[],
  userStats: {} as IStatstic[],
  usersCount: 0,
  isLoading: false,
};

export default function tableReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_USER_STATS:
      return {
        ...state,
        userStats: action.data,
      };
    case GET_USERS:
      return {
        ...state,
        users: action.data.users,
        usersCount: action.data.usersCount,
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
