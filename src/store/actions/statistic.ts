import { GET_USER_STATS, START_FETCHING, STOP_FETCHING } from '../actions/types';
// import { RowsType, colNameType } from 'types/types';
import axios from 'axios';
import { IRange, IStatstic } from '../../types';

// let userStats: Array<RowsType>;

function getUserStatsAction(data: IStatstic[]) {
  return {
    type: GET_USER_STATS,
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

export function getUserStats(id: number, datesRange: IRange) {
  return async (dispatch: any) => {
    try {
      dispatch(startFetching());
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/user/${id}?fromDate=${datesRange.startDate}&toDate=${datesRange.endDate}`
      );
      // userStats = res.data;
      dispatch(stopFetching());
      dispatch(getUserStatsAction(res.data));
    } catch (e) {
      dispatch(stopFetching());
      console.error('Getting data error: ', e);
    }
  };
}
