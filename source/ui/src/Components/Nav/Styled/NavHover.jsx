import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  cssBreakpoints as cssBp,
  breakpoints as bp,
  color as c,
} from '../../../Utils/CssVariables';

const NavHover = styled(Link)`
  position: relative;

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    background-color: ${c.YELLOW};
    visibility: hidden;
    opacity: 0;
    transition: all 600ms ease-in-out;
  }

  &:before {
    top: 0;
    right: 0;
  }

  &:after {
    bottom: 0;
    left: 0;
  }

  &:focus,
  &:hover {
    color: ${c.BLUE_LITE};

    &:after,
    &:before {
      opacity: 1;
      visibility: visible;
      width: 100%;
    }
  }
`;

export default NavHover;
