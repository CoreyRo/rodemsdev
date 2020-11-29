import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import { cssBreakpoints as cssBp, breakpoints as bp, color as c } from '../../Utils/CssVariables';
import GridItem from '../Grid/GridItem';
import Grid from '../Grid';
import Logo from '../Logo';
import Burger from './Burger';
import NavItems from './NavItems';
import s from './Nav.module.scss';

const MobileGridMenu = styled(GridItem).attrs((props) => ({
  visibility: props.show ? 'visible' : 'hidden',
}))`
  @media screen and (max-width: ${bp.TABLET}px) {
    visibility: ${(props) => props.visiblility};
    height: auto;
    overflow: hidden;
    display: none;
    max-height: 0;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    overflow: hidden;
    display: none;
    background-color: ${c.DARKEST};
    padding: calc(1rem + 2 * (1rem)) 1rem 1rem;
  }

  @media ${cssBp.TABLET} {
    display: grid;
  }
`;

const MobileNavGridItem = styled(GridItem).attrs((props) => ({
  show: props.show,
}))`
  display: grid;
  ${(props) => (props.show ? `z-index: 1;` : ``)};

  @media ${cssBp.TABLET} {
    visibility: hidden;
    display: none;
  }
`;

const MobileNavMenuButton = styled.button`
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
  const menuBtnGridItemRef = useRef();
  const menuBtnRef = useRef();
  const burgerRef = useRef();

  const [displayMobileNav, setDisplayMobileNav] = useState(false);

  /* ****************************** Handlers ******************************
   *********************************************************************** */
  const navItemClickCallback = (show) => setDisplayMobileNav(show);

  const handleOutsideMenuClick = (e) => {
    e.stopPropagation();
    if (
      !menuRef.current.contains(e.target) &&
      !menuBtnGridItemRef.current.contains(e.target) &&
      !menuBtnRef.current.contains(e.target) &&
      !burgerRef.current.contains(e.target)
    )
      navItemClickCallback(false);
  };
  const handleOnClick = (e) => {
    e.stopPropagation();
    navItemClickCallback(!displayMobileNav);
  };

  /* ****************************** Effects *******************************
   *********************************************************************** */
  useEffect(() => {
    if (displayMobileNav) {
      document.addEventListener('mousedown', handleOutsideMenuClick, false);
      return () => document.removeEventListener('mousedown', handleOutsideMenuClick, false);
    }
  }, [displayMobileNav]);
  useEffect(() => {
    if (windowWidth >= bp.TABLET) {
      setDisplayMobileNav(false);
    }
  }, [windowWidth, setDisplayMobileNav]);

  /* **************************** Render *********************************
   *********************************************************************** */
  return (
    <nav>
      <Grid>
        <GridItem smPhone={{ colSpan: 2 }} tablet={{ colSpan: 1 }} tabletHz={{ colSpan: 2 }}>
          <Link to="/" title="home" onClick={() => navItemClickCallback(false)}>
            <Logo aria-hidden />
          </Link>
        </GridItem>

        {windowWidth < bp.TABLET ? (
          <>
            <MobileNavGridItem
              smPhone={{ colSpan: 2 }}
              tabletHz={{ colSpan: 2 }}
              align="center"
              justify="right"
              show={displayMobileNav}
              ref={menuBtnGridItemRef}
            >
              <MobileNavMenuButton
                type="button"
                aria-controls="navigation-menu"
                onClick={handleOnClick}
                aria-pressed={displayMobileNav}
                aria-label={`${displayMobileNav ? 'close' : 'open'} the navigation menu`}
                ref={menuBtnRef}
                data-testid="burger-button"
              >
                <Burger clicked={displayMobileNav} ref={burgerRef} />
              </MobileNavMenuButton>
            </MobileNavGridItem>
            <MobileGridMenu
              ref={menuRef}
              subGrid
              aria-expanded={displayMobileNav}
              id="navigation-menu"
              smPhone={{ colSpan: 4 }}
              tablet={{ colStart: 3, colSpan: 2 }}
              tabletHz={{ colStart: 3, colSpan: 10 }}
              show={displayMobileNav}
              cssClasses={displayMobileNav ? s.expanded : ''}
              data-testid="mobile-nav-menu"
              hidden={!displayMobileNav}
            >
              <NavItems callback={navItemClickCallback} windowWidth={windowWidth} />
            </MobileGridMenu>
          </>
        ) : (
          <NavItems callback={navItemClickCallback} displayMobileNav={displayMobileNav} />
        )}
      </Grid>
    </nav>
  );
};

Nav.propTypes = {
  windowWidth: PropTypes.number.isRequired,
};

export default Nav;
