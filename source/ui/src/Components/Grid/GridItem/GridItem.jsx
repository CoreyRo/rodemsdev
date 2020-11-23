/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints as bp } from '../../../Utils/CssVariables';

const itemCfg = {
  rowStart: 'auto',
  rowSpan: 'auto',
  colStart: 'auto',
  colSpan: 'auto',
};

const StyledDiv = styled.div`
  ${(props) => `
  display: ${props.hideMobile ? 'none' : 'grid'};
  ${props.subGrid === true ? `grid-template-columns: inherit;grid-gap: inherit;` : ''}

  grid-area: ${!isNaN(props.smPhone.rowStart) ? `span ${props.smPhone.rowStart}` : 'auto'} /
  ${!isNaN(props.smPhone.colStart) ? `span ${props.smPhone.colStart}` : 'auto'} / 
    ${!isNaN(props.smPhone.rowSpan) ? `span ${props.smPhone.rowSpan}` : 'auto'} / 
    ${!isNaN(props.smPhone.colSpan) ? `span ${props.smPhone.colSpan}` : 'auto'};

    @media ${bp.PHONE} {
      ${
        props.phone !== null
          ? `
      grid-area: ${!isNaN(props.phone.rowStart) ? `span ${props.phone.rowStart}` : 'auto'} /
      ${!isNaN(props.phone.colStart) ? `span ${props.phone.colStart}` : 'auto'} / 
        ${!isNaN(props.phone.rowSpan) ? `span ${props.phone.rowSpan}` : 'auto'} / 
        ${!isNaN(props.phone.colSpan) ? `span ${props.phone.colSpan}` : 'auto'};
      `
          : ``
      }
    }

    @media ${bp.TABLET} {
      ${
        props.tablet !== null
          ? `
      grid-area: ${!isNaN(props.tablet.rowStart) ? `span ${props.tablet.rowStart}` : 'auto'} /
      ${!isNaN(props.tablet.colStart) ? `span ${props.tablet.colStart}` : 'auto'} / 
        ${!isNaN(props.tablet.rowSpan) ? `span ${props.tablet.rowSpan}` : 'auto'} / 
        ${!isNaN(props.tablet.colSpan) ? `span ${props.tablet.colSpan}` : 'auto'};
      `
          : ``
      }
    }

    @media ${bp.TABLET_LANDSCAPE} {
      display: ${props.hideDesktop ? 'none' : 'grid'};

      ${
        props.tabletHz !== null
          ? `
      grid-area: ${!isNaN(props.tabletHz.rowStart) ? `span ${props.tabletHz.rowStart}` : 'auto'} /
      ${!isNaN(props.tabletHz.colStart) ? `span ${props.tabletHz.colStart}` : 'auto'} / 
        ${!isNaN(props.tabletHz.rowSpan) ? `span ${props.tabletHz.rowSpan}` : 'auto'} / 
        ${!isNaN(props.tabletHz.colSpan) ? `span ${props.tabletHz.colSpan}` : 'auto'};
      `
          : ``
      }
    }

    @media ${bp.SM_DESKTOP} {
      ${
        props.smDesktop !== null
          ? `
      grid-area: ${!isNaN(props.smDesktop.rowStart) ? `span ${props.smDesktop.rowStart}` : 'auto'} /
      ${!isNaN(props.smDesktop.colStart) ? `span ${props.smDesktop.colStart}` : 'auto'} / 
        ${!isNaN(props.smDesktop.rowSpan) ? `span ${props.smDesktop.rowSpan}` : 'auto'} / 
        ${!isNaN(props.smDesktop.colSpan) ? `span ${props.smDesktop.colSpan}` : 'auto'};
      `
          : ``
      }
    }

    @media ${bp.DESKTOP} {
      ${
        props.desktop !== null
          ? `
      grid-area: ${!isNaN(props.desktop.rowStart) ? `span ${props.desktop.rowStart}` : 'auto'} /
      ${!isNaN(props.desktop.colStart) ? `span ${props.desktop.colStart}` : 'auto'} / 
        ${!isNaN(props.desktop.rowSpan) ? `span ${props.desktop.rowSpan}` : 'auto'} / 
        ${!isNaN(props.desktop.colSpan) ? `span ${props.desktop.colSpan}` : 'auto'};
      `
          : ``
      }
    }

    @media ${bp.LG_DESKTOP} {
      ${
        props.lgDesktop !== null
          ? `
      grid-area: ${!isNaN(props.lgDesktop.rowStart) ? `span ${props.lgDesktop.rowStart}` : 'auto'} /
      ${!isNaN(props.lgDesktop.colStart) ? `span ${props.lgDesktop.colStart}` : 'auto'} / 
        ${!isNaN(props.lgDesktop.rowSpan) ? `span ${props.lgDesktop.rowSpan}` : 'auto'} / 
        ${!isNaN(props.lgDesktop.colSpan) ? `span ${props.lgDesktop.colSpan}` : 'auto'};
      `
          : ``
      }
    }
  
  `}
`;

const GridItem = ({
  subGrid,
  hideMobile,
  hideDesktop,
  smPhone,
  phone,
  tablet,
  tabletHz,
  smDesktop,
  desktop,
  lgDesktop,
  children,
}) => (
  <StyledDiv
    smPhone={smPhone}
    phone={phone}
    tablet={tablet}
    tabletHz={tabletHz}
    smDesktop={smDesktop}
    desktop={desktop}
    lgDesktop={lgDesktop}
    subGrid={subGrid}
    hideMobile={hideMobile}
    hideDesktop={hideDesktop}
  >
    {children}
  </StyledDiv>
);

const itemCfgTypes = {
  rowStart: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
  rowSpan: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
  colStart: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
  colSpan: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
};

GridItem.propTypes = {
  smPhone: PropTypes.shape(itemCfgTypes),
  phone: PropTypes.shape(itemCfgTypes),
  tablet: PropTypes.shape(itemCfgTypes),
  tabletHz: PropTypes.shape(itemCfgTypes),
  smDesktop: PropTypes.shape(itemCfgTypes),
  desktop: PropTypes.shape(itemCfgTypes),
  lgDesktop: PropTypes.shape(itemCfgTypes),
  subGrid: PropTypes.bool,
  children: PropTypes.node.isRequired,
  hideMobile: PropTypes.bool,
  hideDesktop: PropTypes.bool,
};

GridItem.defaultProps = {
  smPhone: itemCfg,
  phone: null,
  tablet: null,
  tabletHz: itemCfg,
  smDesktop: null,
  desktop: null,
  lgDesktop: null,
  subGrid: false,
  hideMobile: false,
  hideDesktop: false,
};

export default GridItem;
