import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { cssBreakpoints as cssBp, breakpoints as bp, color as c } from '../../Utils/CssVariables';
import GridItem from '../Grid/GridItem';
import Grid from '../Grid';
import Logo from '../Logo';
import Burger from './Burger';
import NavItems from './NavItems';
import s from './Nav.module.scss';
import NavHover from './Styled';

const StyledNav = styled.nav`
  background-color: ${c.DARK};
`;

const StyledMobileNavGridItem = styled(GridItem).attrs((props) => ({
  show: props.show,
}))`
  display: grid;
  ${(props) => (props.show ? `z-index: 1;` : ``)};

  @media ${cssBp.TABLET} {
    visibility: hidden;
    display: none;
  }
`;

const StyledMobileNavMenu = styled.div`
  @media screen and (max-width: ${bp.TABLET}px) {
    background-color: ${c.DARKER};
    grid-column: span 4;

    &:not(.${s.collapsed}) {
      padding-top: 32px;
      padding-bottom: 32px;
    }
  }

  @media ${cssBp.TABLET} {
    display: grid;
  }
`;

const StyledMobileNavMenuButton = styled.button`
  @media screen and (max-width: ${bp.TABLET}px) {
    background-color: transparent;
    text-align: left;
    border: none;
    padding: 0;
    margin: 0;
    height: 25px;
    width: 25px;
    display: flex;
  }

  @media ${cssBp.TABLET} {
    pointer-events: none;
  }
`;

const Nav = ({ windowWidth }) => {
  /* *********************** States and Hooks ***************************
   *********************************************************************** */
  const menuRef = useRef();

  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  /* ****************************** Handlers ******************************
   *********************************************************************** */
  const navItemClickCallback = (show) => {
    setDisplayMobileNav(show);
  };

  const handleOnClick = (e) => {
    e.stopPropagation();
    navItemClickCallback(!displayMobileNav);
  };

  /* ****************************** Effects *******************************
   *********************************************************************** */
  useEffect(() => {
    if (windowWidth >= bp.TABLET) {
      setDisplayMobileNav(false);
    }
  }, [windowWidth, setDisplayMobileNav]);

  /* **************************** Render *********************************
   *********************************************************************** */
  return (
    <StyledNav>
      <Grid>
        <GridItem smPhone={{ colSpan: 2 }} tablet={{ colSpan: 1 }} tabletHz={{ colSpan: 2 }} flex>
          <NavHover
            className="nav-link"
            to="/"
            title="home"
            onClick={() => navItemClickCallback(false)}
          >
            <Logo aria-hidden />
          </NavHover>
        </GridItem>

        {windowWidth < bp.TABLET ? (
          <>
            <StyledMobileNavGridItem
              smPhone={{ colSpan: 2 }}
              tabletHz={{ colSpan: 2 }}
              align="center"
              justify="right"
              show={displayMobileNav}
            >
              <StyledMobileNavMenuButton
                type="button"
                aria-controls="navigation-menu"
                onClick={handleOnClick}
                aria-pressed={displayMobileNav}
                aria-label={`${displayMobileNav ? 'close' : 'open'} the navigation menu`}
                data-testid="burger-button"
              >
                <Burger clicked={displayMobileNav} />
              </StyledMobileNavMenuButton>
            </StyledMobileNavGridItem>
          </>
        ) : (
          <NavItems callback={navItemClickCallback} displayMobileNav={displayMobileNav} />
        )}
      </Grid>
      {windowWidth < bp.TABLET ? (
        <StyledMobileNavMenu
          ref={menuRef}
          subGrid
          aria-expanded={displayMobileNav}
          id="navigation-menu"
          smPhone={{ colSpan: 4 }}
          tablet={{ colStart: 3, colSpan: 2 }}
          tabletHz={{ colStart: 3, colSpan: 10 }}
          show={displayMobileNav}
          className={`${s.collapser} ${displayMobileNav ? '' : s.collapsed}`}
          data-testid="mobile-nav-menu"
        >
          <NavItems callback={navItemClickCallback} />
        </StyledMobileNavMenu>
      ) : (
        ''
      )}
    </StyledNav>
  );
};

Nav.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Nav;
