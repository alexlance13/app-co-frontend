//@ts-nocheck
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import moment from 'moment';
import { USER_REGISTRATION_DATE } from '../../constants';
import { IRange } from '../../types';

const DatePicker: React.FC<PropsType> = ({ handleSelect, datesRange }) => {
  const [selectionRange, setSelectionRange] = useState<IRange>(datesRange);

  const onChangeHandler = ({ range1 }: IRange) => {
    handleSelect(range1);
    setSelectionRange({
      startDate: moment(range1.startDate).format('YYYY-MM-DD'),
      endDate: moment(range1.endDate).format('YYYY-MM-DD'),
    });
  };

  const range: IRange = { startDate: new Date(selectionRange.startDate), endDate: new Date(selectionRange.endDate) };

  return (
    <DateRange
      maxDate={new Date(moment().add(1, 'day'))}
      minDate={new Date(moment(USER_REGISTRATION_DATE))}
      showSelectionPreview
      ranges={[range]}
      onChange={onChangeHandler}
    />
  );
};

export default DatePicker;

interface PropsType {
  handleSelect: (range1: IRange) => void;
  datesRange: IRange;
}
