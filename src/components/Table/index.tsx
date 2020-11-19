import React from 'react';
import { IUser, TableFieldType } from '../../types';
import { Wrapper } from './styles';

const Table: React.FC<PropsType> = ({ data, fields, onTrClick }) => {
  return (
    <Wrapper>
      <table>
        <thead>
          <tr>
            {fields.map((field: TableFieldType) => (
              <th key={field.value}>{field.title}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((user: IUser) => (
            <tr onClick={() => onTrClick(user)} key={user.user_id}>
              {fields.map((field: TableFieldType) => (
                <td key={field.value}>{user[field.value as keyof IUser]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </Wrapper>
  );
};

export default Table;

type PropsType = {
  data: IUser[];
  onTrClick: any;
  fields: TableFieldType[];
};
