import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import { Link } from 'react-router-dom';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

export default function Delete({ isDelete, handleDelete, notDelete }) {
  if (!isDelete) return <></>;
  return (
    <Container>
      <div>
        <Link onClick={handleDelete} to="">
          <FaThumbsUp color="#66ff33" cursor="pointer" />
        </Link>
        <Link onClick={notDelete} to="">
          <FaThumbsDown color="#C3073F" cursor="pointer" />
        </Link>
      </div>
      <span>Deseja continuar?</span>
    </Container>
  );
}

Delete.defaultProps = {
  isDelete: false,
};

Delete.propTypes = {
  isDelete: PropTypes.bool,
  handleDelete: PropTypes.func.isRequired,
  notDelete: PropTypes.func,
};
