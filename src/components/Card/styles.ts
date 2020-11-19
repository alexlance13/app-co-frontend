import styled from 'styled-components';

export const Wrapper = styled.div`
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.16);
  border-radius: 2.22vw;
  height: 22.43vw;
  width: 26.38vw;
  display: grid;
  grid-template: 60% 14% 29% / 100%;
  align-items: flex-start;
  img {
    align-self: center;
    justify-self: center;
    height: 6.66vw;
    width: 7.36vw;
  }
  p {
    width: 83%;
    color: #7e7e7e;
    font-weight: 400;
    font-size: 1.11vw;
    margin: 0 auto;
  }
  span {
    margin: 0 auto;
    width: 100%;
    font-weight: 600;
    font-size: 1.67vw;
    display: block;
    strong {
      font-weight: 600;
    }
  }
  @media (max-width: 915px) {
    p {
      font-size: 12px;
    }
    span {
      font-size: 16px;
    }
    img {
      height: 61px;
      width: 67px;
    }
    grid-template: 50% 15% 35% / 100%;
    height: 210px;
  }
  @media (max-width: 700px) {
    width: 60%;
  }
  @media (max-width: 360px) {
    width: 80%;
  }
`;
