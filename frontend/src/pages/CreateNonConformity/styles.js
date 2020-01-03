import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 50px auto;

  h1 {
    color: #4aa3a1;
    text-align: center;
    font-size: 34px;
  }

  hr {
    border: 0;
    height: 1px;
    background: #83878f;
    margin-top: 25px;
    opacity: 0.1;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    label {
      font-weight: 500;
      font-size: 18px;
      margin-bottom: 10px;
    }

    input {
      background: #ffffff;
      border: 0;
      border: 1px solid #cccccc;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #83878f;
      margin: 0 0 10px;

      &::placeholder {
        color: #83878f;
      }

      &:last-child {
        width: 100%;
      }

      &:focus {
        border: 2px solid #3b9eff;
      }
    }

    span {
      color: #d5212e;
      font-weight: bold;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    button {
      &:last-child {
        margin: 10px 0 0;
        height: 44px;
        background: #3b9eff;
        font-weight: bold;
        color: #fff;
        border: 0;
        border-radius: 4px;
        font-size: 16px;
        transition: background 0.2s;

        &:hover {
          background: ${darken(0.03, '#3b9eff')};
        }
      }
    }
  }
`;
