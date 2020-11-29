import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cssBreakpoints as cssBp } from '../../Utils/CssVariables';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 16px;
  grid-gap: 1rem;

  @media ${cssBp.PHONE} {
    ${(props) => (props.noPadding ? '' : 'padding: 32px;')}
  }

  @media ${cssBp.TABLET} {
    grid-template-columns: repeat(6, 1fr);
  }

  @media ${cssBp.TABLET_LANDSCAPE} {
    grid-template-columns: repeat(12, 1fr);
  }

  @media ${cssBp.SM_DESKTOP} {
  }

  @media ${cssBp.DESKTOP} {
  }

  @media ${cssBp.DESKTOP_MAX} {
    margin: 0 auto;
    ${(props) => (props.noPadding ? '' : 'padding: 32px 0;')}
    ${(props) => (props.noPadding ? '' : 'max-width: 1680px;')}
  }

  @media ${cssBp.LG_DESKTOP} {
  }
`;

const Grid = ({ children, noPadding }) => <StyledDiv noPadding={noPadding}>{children}</StyledDiv>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  noPadding: PropTypes.bool,
};

Grid.defaultProps = {
  noPadding: false,
};

export default Grid;
