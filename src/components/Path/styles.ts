import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  ${(props: PropsType) => (props.current ? 'color: #3A80BA;' : 'color: #cccccc;')}
  font-size: 1.11vw;
  @media (max-width: 700px) {
    font-size: 10px;
  }
`;
export const Wrapper = styled.div`
  color: #cccccc;
  margin-top: 1.11vw;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

export const Arrow = styled.div`
  background: url('/greyArrow.png') no-repeat;
  background-size: cover;
  height: 0.8vw;
  display: inline-block;
  width: 0.5vw;
  margin: 0 0.5vw;
  transform: rotate(180deg);
  @media (max-width: 700px) {
    height: 7px;
    width: 5px;
    margin: 0 4px;
  }
`;

interface PropsType {
  current: number;
}
