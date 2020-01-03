import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;

  display: flex;
  flex-direction: column;

  header {
    display: flex;
    align-self: center;
    align-items: center;

    div {
      &:hover {
        cursor: pointer;
        transform: translateY(-5px);
        transition: all 0.2s;
      }
      width: 300px;
      height: 80px;
      background-color: ${lighten(0.3, '#4aa3a1')};
      border: 1px solid #4aa3a1;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-self: center;
      align-items: center;
      flex-direction: column;

      button {
        border: 0;
        background: none;
      }

      strong {
        color: #fff;
      }
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
    margin-top: 30px;
  }
`;

export const Nonconformity = styled.li`
  padding: 20px;
  border-radius: 4px;
  background: #fff;

  div {
    display: flex;

    div {
      width: 10px;
    }

    strong {
      display: flex;;
      color: #4aa3a1;
      font-size: 20px;
      font-weight: normal;
    }
  }

  span
`;

export const Status = styled.div``;
