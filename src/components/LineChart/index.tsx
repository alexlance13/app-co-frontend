import React, { useCallback, useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { USER_REGISTRATION_DATE } from '../../constants';
import getDatesBetween from '../../helpers';
import { Wrapper, StyledResponsiveContainer } from './styles';
import moment from 'moment';
import { IRange, IStatstic } from '../../types';

const MyLineChart: React.FC<PropsType> = ({ data, dataKey, datesRange, setDatesRange, name }) => {
  const [windowWidth, setWindowWidth] = useState(document.body.clientWidth);

  const setWidthOnResize = useCallback(() => {
    setWindowWidth(document.body.clientWidth);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', setWidthOnResize);
    return () => {
      window.removeEventListener('resize', setWidthOnResize);
    };
  }, [setWidthOnResize]);

  useEffect(() => {
    if (data.length && datesRange.startDate === USER_REGISTRATION_DATE && datesRange.endDate === moment().format('YYYY-MM-DD')) {
      const sortedData = data.sort(
        (a: IStatstic, b: IStatstic) => Date.parse(a.user_statistic_date) - Date.parse(b.user_statistic_date)
      );
      setDatesRange({
        startDate: sortedData[0].user_statistic_date,
        endDate: sortedData[sortedData.length - 1].user_statistic_date,
      });
    }
  }, [data, datesRange, setDatesRange]);

  let data1 = data.slice();
  const dataCopy = data1.slice();
  const allDates = getDatesBetween(datesRange.startDate, datesRange.endDate);
  allDates.forEach((date: string) => {
    const index = dataCopy.findIndex((stat: IStatstic) => stat.user_statistic_date === date);
    if (!~index) {
      data1.push({ user_statistic_date: date, user_statistic_page_views: 0, user_statistic_clicks: 0 });
    } else {
      dataCopy.splice(index, 1);
    }
  });
  data1 = data1.sort((a: IStatstic, b: IStatstic) => Date.parse(a.user_statistic_date) - Date.parse(b.user_statistic_date));
  return (
    <Wrapper>
      <StyledResponsiveContainer>
        <LineChart width={1180} height={600} data={data1} margin={{ right: 8, left: 8, top: 16, bottom: 16 }}>
          <CartesianGrid stroke='#f1f1f1' vertical={false} />
          <Line
            name={name}
            type='monotone'
            dataKey={dataKey}
            stroke='#3A80BA'
            strokeWidth={windowWidth > 700 ? 4 : 2}
            dot={false}
          />
          <XAxis
            padding={{ left: 20, right: 20 }}
            minTickGap={windowWidth * 0.036}
            tickMargin={16}
            domain={[0, 5]}
            dataKey='user_statistic_date'
            axisLine={false}
            tickLine={false}
          />
          <YAxis tickCount={6} axisLine={false} tickLine={false} />
          <Tooltip filterNull={true} />
        </LineChart>
      </StyledResponsiveContainer>
    </Wrapper>
  );
};
export default MyLineChart;

interface PropsType {
  data: IStatstic[];
  name: string;
  dataKey: string;
  datesRange: IRange;
  setDatesRange: (datesRange: IRange) => void;
}
