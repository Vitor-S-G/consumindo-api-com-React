import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Container = styled.div`
  position: absolute;
  width: 450px;
  height: 350px;
  top: 0;
  left: 10;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 30px;
  margin: 100px auto;

  div {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.8);
  }

  a {
    width: 70px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #66ff33;
    border-radius: 4px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  a + a {
    border: 2px solid ${colors.primaryColor};
  }

  a:hover {
    transition: 1s ease-in-out;
    background: ${colors.primaryDarkColor};
  }

  span {
    z-index: 2;
    color: ${colors.primaryColor};
    margin-left: 20%;
  }
`;
