import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  > div {
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

    div {
      display: flex;
      flex: 1;
      flex-direction: row;
      span {
        background: #eee;
        border-radius: 4px;
        margin-left: 5px;
        font-size: 16px;
        padding: 5px;
      }
    }

    time {
      span {
        color: #999;
        font-size: 14px;
      }
    }
  }

  div:not(:first-child) {
    margin-top: 10px;
    display: flex;

    strong {
      font-size: 18px;
      text-align: center;
    }

    hr {
      margin-top: 15px;
      border: 0;
      width: 95%;
      margin-left: 5%;
      height: 1px;
      background: #999 !important;
      opacity: 0.1;
      margin-bottom: 5px;
      border-radius: 2px;
    }

    .corrective-actions-field {
      background: none;
      display: flex;
      flex: 1;
      flex-direction: row;
      text-align: center;
      vertical-align: middle;
      line-height: 20px;

      strong {
        width: 30%;
        font-weight: normal;
        color: #999;
        background: none;
        margin-left: 5px;
        font-size: 18px;
        padding: 5px;
      }

      span {
        width: 70%;
        margin: 0;
        background: none;
        display: flex;
        text-align: left;
        border: 1px solid #eee;
      }
    }
  }
`;
