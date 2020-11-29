import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { color as c } from '../../Utils/CssVariables';

const LogoSpan = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: ${(props) => props.size};
`;

const BlueText = styled(LogoSpan)`
  color: ${c.BLUE};
`;

const YellowText = styled(LogoSpan)`
  color: ${c.YELLOW};
`;

const Logo = ({ size, ...rest }) => (
  <LogoSpan size={size} {...rest}>
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
