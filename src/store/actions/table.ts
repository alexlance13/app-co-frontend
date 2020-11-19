import { GET_USERS, START_FETCHING, STOP_FETCHING } from '../actions/types';
// import { RowsType, colNameType } from 'types/types';
import axios from 'axios';
import { IUser } from '../../types';

// let usersForTable: Array<RowsType>;

function getUsersAction(data: IUser[]) {
  return {
    type: GET_USERS,
    data,
  };
}

function startFetching() {
  return {
    type: START_FETCHING,
  };
}
function stopFetching() {
  return {
    type: STOP_FETCHING,
  };
}

export function getUsers(page: number, itemsPerPage: number) {
  return async (dispatch: any) => {
    try {
      dispatch(startFetching());
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/users?page=${page}&itemsPerPage=${itemsPerPage}`);
      // usersForTable = res.data;
      dispatch(stopFetching());
      dispatch(getUsersAction(res.data));
    } catch (e) {
      dispatch(stopFetching());
      console.error('Getting data error: ', e);
    }
  };
}
