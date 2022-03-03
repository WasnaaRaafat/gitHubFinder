import React from 'react';
import ReposItem from './ReposItem';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
  return repos.map(item => <ReposItem repos={item} key={item.id} />);
};
Repos.prototype = {
  repos: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};
export default Repos;
