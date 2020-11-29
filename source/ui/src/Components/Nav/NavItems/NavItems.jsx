import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import GridItem from '../../Grid/GridItem';
import { cssBreakpoints as cssBp, color as c } from '../../../Utils/CssVariables';
import NavHover from '../Styled';

const NavLink = styled(NavHover)`
  font-weight: bold;
  color: ${c.BLUE};
  &:hover {
    color: ${c.BLUE_LITE};
  }

  @media ${cssBp.TABLET} {
    text-align: right;
  }
`;

const FlexItem = styled(GridItem)`
  display: grid;
  text-align: center;

  @media ${cssBp.TABLET} {
    justify-content: flex-end;
  }
`;

const NavItemGridItem = styled(FlexItem)`
  padding: 0 0 1rem;

  @media ${cssBp.TABLET} {
    padding: unset;
  }
`;
const MobileOnlyGridItem = styled(NavItemGridItem)`
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
      <NavLink className="nav-link" to="/" onClick={() => callback(false)}>
        Home
      </NavLink>
    </MobileOnlyGridItem>
    <NavItemGridItem
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 4, colSpan: 1 }}
      tabletHz={{ colStart: 10, colSpan: 1 }}
    >
      <NavLink className="nav-link" to="/about" onClick={() => callback(false)}>
        About
      </NavLink>
    </NavItemGridItem>
    <NavItemGridItem
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 5, colSpan: 1 }}
      tabletHz={{ colStart: 11, colSpan: 1 }}
    >
      <NavLink className="nav-link" to="/projects" onClick={() => callback(false)}>
        Projects
      </NavLink>
    </NavItemGridItem>
    <FlexItem
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 6, colSpan: 1 }}
      tabletHz={{ colStart: 12, colSpan: 1 }}
    >
      <NavLink className="nav-link" to="/contact" onClick={() => callback(false)}>
        Contact
      </NavLink>
    </FlexItem>
  </>
);
NavItems.propTypes = {
  callback: PropTypes.func.isRequired,
};
export default NavItems;
