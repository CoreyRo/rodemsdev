import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ size, children }) => {
  const Size = `h${size}`;
  return <Size>{children}</Size>;
};

Header.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.string.isRequired,
};

Header.defaultProps = {
  size: 1,
};

export default Header;
