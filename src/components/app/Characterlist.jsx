import React from 'react';
import PropTypes from 'prop-types';

const Characterlist = ({ characters }) => (
  <ul aria-label="characters">
    {characters.map((character) => (
      <li key={character.id}></li>
    ))}
  </ul>
);
