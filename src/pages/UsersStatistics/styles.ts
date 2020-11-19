import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  position: relative;
  h1 {
    font-size: 2.22vw;
    margin: 1.67vw auto 1.11vw auto;
    @media (max-width: 700px) {
      font-size: 16px;
      margin: 12px 0 8px 0;
    }
  }
`;

export const Content = styled.div`
  width: 82%;
  margin: 0 auto;
  padding-bottom: 57px;
  @media (max-width: 915px) {
    width: 90%;
  }
`;
