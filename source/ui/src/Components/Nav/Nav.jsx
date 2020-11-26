import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints as bp } from '../../Utils/CssVariables';
import GridItem from '../Grid/GridItem';
import Grid from '../Grid';
import Logo from '../Logo';

const MobileGridItem = styled(GridItem).attrs((props) => ({
  display: props.show ? 'grid' : 'none',
}))`
  display: ${(props) => props.display};
  max-height: 100vh;

  @media ${bp.TABLET} {
    display: grid;
  }
`;
const [displayMobileNav, setDisplayMobileNav] = useState(false);

const Nav = (props) => (
  <Grid>
    <GridItem smPhone={{ colSpan: 4 }} tablet={{ colSpan: 2 }} tabletHz={{ colSpan: 2 }}>
      <Logo />
    </GridItem>
    <MobileGridItem
      subGrid
      smPhone={{ colSpan: 4 }}
      tablet={{ colStart: 3, colSpan: 2 }}
      tabletHz={{ colStart: 3, colSpan: 10 }}
      show={displayMobileNav}
    >
      <GridItem
        smPhone={{ colSpan: 4 }}
        tablet={{ colStart: 2, colSpan: 1 }}
        tabletHz={{ colStart: 10, colSpan: 1 }}
      >
        About
      </GridItem>
      <GridItem
        smPhone={{ colSpan: 4 }}
        tablet={{ colStart: 3, colSpan: 1 }}
        tabletHz={{ colStart: 11, colSpan: 1 }}
      >
        Projects
      </GridItem>
      <GridItem
        smPhone={{ colSpan: 4 }}
        tablet={{ colStart: 4, colSpan: 1 }}
        tabletHz={{ colStart: 12, colSpan: 1 }}
      >
        Contact
      </GridItem>
    </MobileGridItem>
  </Grid>
);

Nav.propTypes = {};

export default Nav;
