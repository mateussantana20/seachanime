import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  background-color: #216DB8;
  max-width: 960px;
  padding: 24px 16px;
  margin: 12px auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
`;

export const Left = styled.div`
  padding: 0 8px;

  img {
    border-radius: 16px;
  }
`;

export const Right = styled.header`
  padding: 8px;

  .header {
    display: flex;
    align-items: center;

    a {
      margin-right: 8px;
    }
  }

  .synopsis {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 8px 4px;
    background-color: #1E293B;
    border-radius: 8px;
    margin: 4px 0;

    p {
      margin: 4px 0;
      padding: 8px 4px;
    }

    span {
      padding: 8px 4px;
    }
  }
`;

export const Info = styled.div`
  background-color: #1E293B;
  color: #fff;
  border-radius: 8px;
  padding: 16px 8px;

  .score, .status, .type, .rank, .rating, .episodes {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bold;

    p {
      padding: 8px 4px;
      border-radius: 8px;
      margin: 4px 0;
      color: #216DB8;
      text-transform: uppercase;
    }

    span {
      margin-left: 4px;
    }
  }

  a {
    text-decoration: none;
    color: #fff;
    background-color: #216DB8;
    padding: 8px 4px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 8px;
    transition: filter 0.2s;
  }

  a:hover {
    filter: brightness(0.8);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackButton = styled(Link)`
  outline: 0;
  background: transparent;
  border: 0;
`;

