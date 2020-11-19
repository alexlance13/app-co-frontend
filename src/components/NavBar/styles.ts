import styled from 'styled-components';

export const Wrapper = styled.nav`
  background-color: rgba(58, 128, 186, ${(props: PropsType) => (props.isHome ? '0' : '1')});
`;

export const Content = styled.nav`
  height: 5vw;
  width: 82%;
  margin: 0 auto;
  display: grid;
  align-items: ${(props: PropsType) => (props.isHome ? 'end' : 'center')};
  a {
    color: white;
    font-size: 2.78vw;
    font-weight: 400;
    width: 130px;
  }
  @media (max-width: 915px) {
    a {
      font-size: 26px;
    }
    height: 46px;
    width: 90%;
  }
`;

interface PropsType {
  isHome?: boolean;
}
