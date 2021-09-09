import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ id, name, image }) => (
  <>
    <p>{name}</p>
    <img src={image} alt={name, id} />
  </>
);

Character.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
