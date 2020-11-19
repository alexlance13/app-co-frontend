import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  h1 {
    font-size: 2.22vw;
    margin: 1.67vw auto 1.11vw auto;
  }
  h2 {
    font-size: 1.67vw;
    margin: 1.67vw auto;
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 16px;
      margin: 12px 0 8px 0;
    }
    h2 {
      font-size: 12px;
      margin: 8px 0 6px 0;
    }
  }
`;

export const Content = styled.div`
  width: 82%;
  margin: 0 auto;
  padding-bottom: 7vw;
  @media (max-width: 915px) {
    padding-bottom: 94px;
    width: 90%;
  }
`;

export const ButtonsDiv = styled.div`
  position: absolute;
  left: 40%;
  display: grid;
  grid-template: 1fr / 1fr 1fr;
  grid-gap: 1.66vw;
  button {
    height: 3.33vw;
    @media (max-width: 700px) {
      height: 24px;
    }
  }
    @media (max-width: 500px) {
      width: 70%;
      left: 0;
      margin: 0 auto;
      position: relative;
    }
  }
`;
