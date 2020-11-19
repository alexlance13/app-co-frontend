import styled from 'styled-components';

export const Wrapper = styled.div`
  table {
    width: 100%;
    border-radius: 1.4vw;
    overflow: hidden;
    th {
      white-space: nowrap;
      text-align: start;
      background: #3a80ba;
      color: white;
      font-size: 1.11vw;
      font-weight: 400;
      height: 3.33vw;
      padding: 0 1.38vw 0 1.67vw;
    }
    tr {
      td {
        padding-left: 1.67vw;
        text-align: start;
        height: 2.22vw;
        font-size: 1.11vw;
      }
      &:nth-child(even) {
        background: #f1f1f1;
      }
      &:nth-child(odd) {
        background: #fbfbfb;
      }
    }
    @media (max-width: 700px) {
      border-radius: 10px;
      th {
        font-size: 8px;
        height: 18px;
        padding: 0 8px;
      }
      li {
        height: 20px;
        width: 20px;
      }
      tr {
        td {
          padding-left: 8px;
          height: 18px;
          font-size: 8px;
        }
      }
    }
    @media (max-width: 630px) {
      white-space: nowrap;
    }
  }
  @media (max-width: 630px) {
    overflow-x: scroll;
  }
`;
