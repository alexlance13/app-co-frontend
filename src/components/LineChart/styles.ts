import { ResponsiveContainer } from 'recharts';
import styled from 'styled-components';

export const Wrapper = styled.div`
  .recharts-cartesian-axis-tick {
    color: #ccc;
    font-size: 1.11vw;
    @media (max-width: 700px) {
      font-size: 10px;
    }
  }
`;

export const StyledResponsiveContainer = styled(ResponsiveContainer)`
  height: 22vw !important;
  position: relative;
  left: -1.11vw;
  @media (max-width: 915px) {
    font-size: 10px;
    height: 220px !important;
  }
  @media (max-width: 700px) {
    left: -30px;
  }
`;
