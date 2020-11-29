import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import GridItem from '../../Grid/GridItem';

import { cssBreakpoints as cssBp, color as c } from '../../../Utils/CssVariables';

const NavLink = styled(Link)`
  color: ${c.BLUE};
  &:hover {
    color: ${c.BLUE_LITE};
    text-decoration: underline;
  }

  @media ${cssBp.TABLET} {
    text-align: right;
  }
`;

const MobileOnlyGridItem = styled(GridItem)`
  @media ${cssBp.TABLET} {
    display: none;
  }
`;

const NavItems = ({ callback }) => (
  <>
    <MobileOnlyGridItem
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 3, colSpan: 1 }}
      tabletHz={{ colStart: 9, colSpan: 1 }}
    >
      <NavLink to="/" onClick={() => callback(false)}>
        Home
      </NavLink>
    </MobileOnlyGridItem>
    <GridItem
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 4, colSpan: 1 }}
      tabletHz={{ colStart: 10, colSpan: 1 }}
    >
      <NavLink to="/about" onClick={() => callback(false)}>
        About
      </NavLink>
    </GridItem>
    <GridItem
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 5, colSpan: 1 }}
      tabletHz={{ colStart: 11, colSpan: 1 }}
    >
      <NavLink to="/projects" onClick={() => callback(false)}>
        Projects
      </NavLink>
    </GridItem>
    <GridItem
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 6, colSpan: 1 }}
      tabletHz={{ colStart: 12, colSpan: 1 }}
    >
      <NavLink to="/contact" onClick={() => callback(false)}>
        Contact
      </NavLink>
    </GridItem>
  </>
);
NavItems.propTypes = {
  callback: PropTypes.func.isRequired,
};
export default NavItems;
