import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  div {
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    padding: 15px;

    strong {
      color: #4aa3a1;
      font-weight: bold;
      font-size: 24px;
    }

    hr {
      margin-top: 5px;
      border: 0;
      width: 100%;
      height: 2px;

      background: #999;
      margin-bottom: 5px;
      border-radius: 2px;

      ${props =>
        props.status === 1 &&
        css`
          background: #569f39 !important;
        `}

      ${props =>
        props.status === 2 &&
        css`
          background: #d5212e !important;
        `}
    }

    span {
      margin-top: 5px;
      color: #999;
      font-size: 18px;
      padding: 0 5px 0 5px;
    }
  }
`;
