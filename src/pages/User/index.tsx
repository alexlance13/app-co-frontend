import React, { useEffect, useMemo, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Wrapper, Content, ButtonsDiv } from './styles';
import { connect } from 'react-redux';
import { getUserStats } from '../../store/actions/statistic';
import LineChart from '../../components/LineChart';
import Path from '../../components/Path';
import moment from 'moment';
import DatePicker from '../../components/DatePicker';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { USER_REGISTRATION_DATE } from '../../constants';
import { IRange, IStatstic, LinkType } from '../../types';

const MySwal = withReactContent(Swal);

const User: React.FC<PropsType> = ({ userStats, getUserStats, match }) => {
  const id: number = useMemo(() => match.params.id, [match.params.id]);
  const name: string = useMemo(() => match.params.name.split('-').join(' '), [match.params.name]);

  const [datesRange, setDatesRange] = useState<IRange>({
    startDate: moment().subtract(1, 'week').format('YYYY-MM-DD'),
    endDate: moment().format('YYYY-MM-DD'),
  });

  const links: LinkType[] = useMemo(
    () => [
      { title: 'Main page', url: '/' },
      { title: 'Users statistics', url: '/users-statistics-table' },
      { title: name, url: `/single-user-statistic/${id}` },
    ],
    []
  );

  useEffect(() => {
    getUserStats(id, datesRange);
  }, [getUserStats, id, datesRange]);

  const handleSelect = (range1: IRange) => {
    setDatesRange({
      startDate: moment(range1.startDate).format('YYYY-MM-DD'),
      endDate: moment(range1.endDate).format('YYYY-MM-DD'),
    });
  };

  const changeDates = () => {
    MySwal.fire({
      html: <DatePicker datesRange={datesRange} handleSelect={handleSelect} />,
    });
  };

  return (
    <Wrapper>
      <NavBar />
      <Content>
        <Path links={links} />
        <h1>{name}</h1>
        <ButtonsDiv>
          <button
            onClick={() =>
              setDatesRange({
                startDate: moment(USER_REGISTRATION_DATE).format('YYYY-MM-DD'),
                endDate: moment().format('YYYY-MM-DD'),
              })
            }>
            Get statistic for all time
          </button>
          <button onClick={changeDates}>Pick a dates</button>
        </ButtonsDiv>
        <h2>Clicks</h2>
        <LineChart
          name={'Clicks'}
          setDatesRange={setDatesRange}
          datesRange={datesRange}
          dataKey='user_statistic_clicks'
          data={userStats}
        />
        <h2>Views</h2>
        <LineChart
          name={'Views'}
          setDatesRange={setDatesRange}
          datesRange={datesRange}
          dataKey='user_statistic_page_views'
          data={userStats}
        />
      </Content>
      <Footer />
    </Wrapper>
  );
};

function mapStateToProps(state: any) {
  return {
    userStats: state.statistic.userStats,
    name: state.statistic.name,
    isLoading: state.table.isLoading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getUserStats: (id: number, datesRange: IRange) => dispatch(getUserStats(id, datesRange)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(User);

interface PropsType {
  userStats: IStatstic[];
  getUserStats: (id: number, datesRange: IRange) => IStatstic[];
  match: any;
  name: string;
}
