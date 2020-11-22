import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints as bp } from '../../Utils/CssVariables';

const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 16px;
  grid-gap: 1rem;

  @media ${bp.PHONE} {
    padding: 32px;
  }

  @media ${bp.TABLET} {
  }

  @media ${bp.TABLET_LANDSCAPE} {
    grid-template-columns: repeat(12, 1fr);
  }

  @media ${bp.SM_DESKTOP} {
  }

  @media ${bp.DESKTOP} {
  }

  @media ${bp.DESKTOP_MAX} {
    margin: 0 auto;
    max-width: 1680px;
    padding: 32px 0;
  }

  @media ${bp.LG_DESKTOP} {
  }
`;

const Grid = ({ children }) => <StyledDiv>{children}</StyledDiv>;

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
