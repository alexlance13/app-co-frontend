import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, Content } from './styles';

const NavBar: React.FC<PropsType> = ({ isHome }) => {
  return (
    <Wrapper isHome={isHome}>
      <Content isHome={isHome}>
        <NavLink to='/'>AppCo</NavLink>
      </Content>
    </Wrapper>
  );
};

export default NavBar;

interface PropsType {
  isHome?: boolean;
}
