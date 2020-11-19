import moment from 'moment';

export default function getDatesBetween(startDate: string, endDate: string): string[] {
  let dateArray = [];
  let currentDate = startDate;
  while (moment(currentDate) <= moment(endDate)) {
    dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
    currentDate = moment(currentDate).add(1, 'days').format('YYYY-MM-DD');
  }
  return dateArray;
}
