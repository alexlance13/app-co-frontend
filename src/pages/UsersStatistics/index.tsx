import React, { useEffect, useState } from 'react';
import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import { Wrapper, Content } from './styles';
import Table from '../../components/Table';
import { connect } from 'react-redux';
import { getUsers } from '../../store/actions/table';
import Pagination from '../../components/Pagination';
import Path from '../../components/Path';
import { IUser, LinkType, TableFieldType } from '../../types';

const fields: TableFieldType[] = [
  {
    title: 'Id',
    value: 'user_id',
  },
  {
    title: 'First name',
    value: 'user_first_name',
  },
  {
    title: 'Last name',
    value: 'user_last_name',
  },
  {
    title: 'Email',
    value: 'user_email',
  },
  {
    title: 'Gender',
    value: 'user_gender',
  },
  {
    title: 'IP address',
    value: 'user_ip_address',
  },
  {
    title: 'Total clicks',
    value: 'total_clicks',
  },
  {
    title: 'Total page views',
    value: 'total_page_views',
  },
];

const links: LinkType[] = [
  { title: 'Main page', url: '/' },
  { title: 'Users statistics', url: '/users-statistics-table' },
];

const UsersStatistics: React.FC<PropsType> = ({ users, usersCount, getUsers, history }) => {
  const [page, setPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);

  useEffect(() => {
    getUsers(page, itemsPerPage);
  }, [page, itemsPerPage, getUsers]);

  const onTrClickHandler = ({ user_id, user_first_name, user_last_name }: IUser) => {
    history.push(`/single-user-statistic/${user_id}/${user_first_name}-${user_last_name}`);
  };

  return (
    <Wrapper>
      <NavBar />
      <Content>
        <Path links={links} />
        <h1>Users statistics</h1>
        <Table onTrClick={onTrClickHandler} data={users} fields={fields} />
        <Pagination
          rowsCount={usersCount}
          itemsPerPage={itemsPerPage}
          totalRowsCount={usersCount}
          paginate={setPage}
          setPage={setPage}
          setItemsPerPage={setItemsPerPage}
          currentPage={page}
        />
      </Content>
      <Footer />
    </Wrapper>
  );
};

function mapStateToProps(state: any) {
  return {
    users: state.table.users,
    usersCount: state.table.usersCount,
    isLoading: state.table.isLoading,
  };
}

function mapDispatchToProps(dispatch: any) {
  return {
    getUsers: (page: number, itemsPerPage: number) => dispatch(getUsers(page, itemsPerPage)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersStatistics);

interface PropsType {
  users: IUser[];
  usersCount: number;
  getUsers: (page: number, itemsPerPage: number) => IUser[];
  history: any;
}
