import styled from 'styled-components';

export const Wrapper = styled.div`
  user-select: none;
  font-size: 1.11vw;
  margin: 1.38vw;
  ul {
    padding-left: 0;
    list-style-type: none;
    display: grid;
    width: 34%;
    margin: 0 auto;
    grid-template: 100% / repeat(7, 14.3%);
    .page {
      border-radius: 0.556vw;
      border: 2px solid #f1f1f1;
      box-sizing: border-box;
    }
    li {
      display: grid;
      align-items: center;
      justify-items: center;
      color: black;
      height: 3.3vw;
      width: 3.3vw;
      margin: 0.556vw;
      &:hover {
        cursor: pointer;
      }
    }
    .active {
      background-color: #3a80ba;
      color: white;
    }
  }
  @media (max-width: 700px) {
    font-size: 10px;
    ul {
      width: 44%;
      li {
        height: 24px;
        width: 24px;
      }
    }
  }
  @media (max-width: 500px) {
    margin: 10px;
    ul {
      width: 70%;
    }
  }
`;

export const Arrow = styled.div`
  background: url(${(props: PropsType) => (props.blue ? '/blueArrow.png' : '/greyArrow.png')}) no-repeat;
  background-size: cover;
  height: 2.3vw;
  display: list-item;
  width: 1.3vw;
  ${(props: PropsType) => ((props.right && !props.blue) || (!props.right && props.blue) ? 'transform: rotate(180deg);' : '')}
  @media (max-width: 700px) {
    height: 16px;
    width: 9px;
  }
`;

interface PropsType {
  right?: boolean;
  blue?: boolean;
}
