import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  padding-bottom: 20.7vw;
  @media (max-width: 915px) {
    padding-bottom: 200px;
  }
`;

export const HeadDiv = styled.div`
  height: 46vw;
  background: no-repeat url('/HeaderWave.png');
  color: white;
  background-size: contain;
  @media (max-width: 915px) {
    height: auto;
    background-size: cover;
  }
  @media (max-width: 700px) {
    background-size: 150% 330px;
  }
  @media (max-width: 360px) {
    background-size: 225% 360px;
  }
`;

export const Mobile = styled.div`
  width: 22.3vw;
  img {
    height: auto;
    width: 100%;
  }
  @media (max-width: 915px) {
    width: 230px;
  }
  @media (max-width: 700px) {
    width: 300px;
  }

  @media (max-width: 360px) {
    width: 265px;
  }
`;

export const RectangleDiv = styled.div`
  width: 82%;
  margin: 0 auto;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  justify-items: end;
  @media (max-width: 915px) {
    width: 90%;
    grid-template: 1fr / 1fr 230px;
  }
  @media (max-width: 700px) {
    grid-template: fit-content(100%) / 1fr;
    justify-items: center;
    grid-gap: 50px;
  }
`;

export const HeadText = styled.div`
  margin-top: 3.47vw;
  span {
    font-size: 3.32vw;
  }
  p {
    margin: 2.1vw auto;
    font-size: 1.39vw;
    font-weight: 400;
  }
  @media (max-width: 915px) {
    margin-top: 32px;
    span {
      font-size: 30px;
    }
    p {
      font-size: 12px;
      margin: 19px auto;
    }
  }
  @media (max-width: 700px) {
    span {
      font-size: 22px;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-align: center;
  display: grid;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  color: #3a80ba;
  width: 10.7vw;
  height: 3.89vw;
  span {
    font-size: 1.11vw;
  }
  @media (max-width: 915px) {
    span {
      font-size: 12px;
    }
    height: 36px;
    width: 100px;
  }
  @media (max-width: 700px) {
    margin: 0 auto;
  }
`;

export const BodyDiv = styled.div`
  text-align: center;
  width: 82%;
  margin: 0 auto;
  p {
    color: #7e7e7e;
  }
  span {
    color: #1a1a1a;
    display: block;
  }
  @media (max-width: 915px) {
    width: 90%;
    margin-top: 20px;
  }
`;

export const BodyText = styled.div`
  p {
    font-size: 1.39vw;
    width: 66%;
    margin: 8px auto;
  }
  span {
    font-size: 2.22vw;
    width: 40%;
    margin: 1.11vw auto;
  }
  @media (max-width: 915px) {
    p {
      font-size: 12px;
      width: 75%;
    }
    span {
      font-size: 20px;
      width: 80%;
    }
  }
  @media (max-width: 700px) {
    p {
      width: 90%;
    }
    span {
      width: 100%;
    }
  }
`;

export const CardsDiv = styled.div`
  margin-top: 2.78vw;
  display: grid;
  grid-template: 1fr / repeat(3, 1fr);
  grid-gap: 1.39vw;
  @media (max-width: 915px) {
    grid-gap: 14px;
    margin-top: 26px;
  }
  @media (max-width: 700px) {
    grid-template: repeat(3, 1fr) / 1fr;
    grid-gap: 20px;
    justify-items: center;
  }
`;
