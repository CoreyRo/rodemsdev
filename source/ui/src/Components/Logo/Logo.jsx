import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const LogoSpan = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: ${(props) => props.size};
`;

const BlueText = styled(LogoSpan)`
  color: #049cfc;
`;

const YellowText = styled(LogoSpan)`
  color: #f8f8af;
`;

const Logo = ({ size }) => (
  <LogoSpan size={size}>
    <BlueText>rodems</BlueText>
    <span>.</span>
    <YellowText>dev</YellowText>
    <span>();</span>
  </LogoSpan>
);

Logo.propTypes = {
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Logo.defaultProps = {
  size: '1rem',
};

export default Logo;
