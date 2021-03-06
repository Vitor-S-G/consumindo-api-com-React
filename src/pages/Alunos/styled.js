import styled from 'styled-components';
import { Link } from 'react-router-dom';
import * as colors from '../../config/colors';

export const StudentConatiner = styled.div`
  margin-top: 10px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;

export const ProfilePicture = styled.div`
  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 1.5s;
  }

  img:hover {
    width: 80px;
    height: 80px;
  }
`;

export const NewStudent = styled(Link)`
  display: block;
  padding: 20px 0 10px 0;
  color: ${colors.primaryColor};
`;
