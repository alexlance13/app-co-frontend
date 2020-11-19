import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: white;
  display: grid;
  align-items: center;
  ${(props: PropsType) =>
    props.isHome
      ? "background: no-repeat url('/FooterWave.png'); height: 12.7vw; background-size: contain;"
      : 'background-color: #1C3B55; height: 4vw;'}
  @media (max-width: 915px) {
    ${(props: PropsType) => (props.isHome ? 'height: 120px; background-size: cover;' : 'height: 46px;')}
  }
`;

export const FooterDiv = styled.div`
  width: 82%;
  margin: 0 auto;
  display: grid;
  @media (max-width: 915px) {
    width: 90%;
  }
`;

export const FooterText = styled.div`
  display: grid;
  grid-template: 1fr / 7.57vw 1fr;
  text-align: center;
  padding: 2.1vw auto;
  span {
    align-self: center;
    font-size: 2.22vw;
  }
  p {
    font-size: 1.11vw;
  }
  @media (max-width: 915px) {
    span {
      font-size: 20px;
    }
    p {
      font-size: 12px;
    }
    grid-template: 100% / 73px 1fr;
  }
  @media (max-width: 700px) {
    grid-template: 100% / 68px 1fr;
    grid-gap: 10px;
    p {
      font-size: 10px;
    }
  }
`;

export const RightsDiv = styled.div`
  display: grid;
  grid-template: 1fr / 1fr 10.21vw;
  @media (max-width: 915px) {
    grid-template: 1fr / 1fr 111px;
  }
  @media (max-width: 700px) {
    grid-template: 1fr / 1fr 93px;
    grid-gap: 10px;
  }
  @media (max-width: 420px) {
    p {
      margin: 5px 0 0 0;
    }
    grid-gap: 0;
    grid-template: max-content max-content / 1fr;
  }
`;

export const SubscribeForm = styled.div`
  margin: 1.8vw auto;
  height: 4.44vw;
  width: 49%;
  border: 1px solid #f1f1f1;
  box-sizing: border-box;
  border-radius: 10px;
  display: grid;
  grid-template: 100% / 70% 30%;
  background: white;
  input {
    border: none;
    border-radius: 8px;
    &::placeholder {
      color: #b9b9b9;
      padding: 1.39vw;
      font-size: 1.11vw;
    }
  }
  button {
    margin: 0.2778vw;
  }
  @media (max-width: 915px) {
    border-radius: 5px;
    height: 40px;
    input {
      border-radius: 8px;
      &::placeholder {
        padding: 14px;
        font-size: 12px;
      }
    }
    button {
      border-radius: 4px;
      margin: 2px;
      font-size: 12px;
    }
    margin: 16px auto;
  }
  @media (max-width: 700px) {
    width: 260px;
    margin: 22px auto 8px auto;
  }
  @media (max-width: 360px) {
    width: 210px;
    input::placeholder {
      font-size: 10px;
    }
  }
`;

interface PropsType {
  isHome?: boolean;
}
