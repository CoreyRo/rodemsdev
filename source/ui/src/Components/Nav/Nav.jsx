import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints as bp } from '../../Utils/CssVariables';
import GridItem from '../Grid/GridItem';
import Grid from '../Grid';
import Logo from '../Logo';

const Nav = (props) => (
  <Grid>
    <GridItem smPhone={{ colSpan: 1 }} tabletHz={{ colSpan: 4 }}>
      <Logo />
    </GridItem>
    <GridItem tabletHz={{ colStart: 10, colSpan: 1 }}>About</GridItem>
    <GridItem tabletHz={{ colStart: 11, colSpan: 1 }}>Projects</GridItem>
    <GridItem tabletHz={{ colStart: 12, colSpan: 1 }}>Contact</GridItem>
  </Grid>
);

Nav.propTypes = {};

export default Nav;
