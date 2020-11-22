import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpoints as bp } from '../../../Utils/CssVariables';

const itemCfg = {
  rowStart: 'auto',
  rowSpan: 1,
  colStart: 'auto',
};

const smCfg = {
  ...itemCfg,
  colSpan: 4,
};

const lgCfg = {
  ...itemCfg,
  colSpan: 12,
};

const StyledDiv = styled.div`
  display: grid;
  ${(props) => (props.subGrid === true ? `grid-template-columns: inherit;grid-gap: inherit;` : '')}

  grid-area: ${({ smPhone }) => smPhone.rowStart || 'auto'} /
    ${({ smPhone }) => smPhone.colStart || itemCfg.colStart} / span
    ${({ smPhone }) => smPhone.rowSpan || itemCfg.rowSpan} / span
    ${({ smPhone }) => smPhone.colSpan || smCfg.colSpan};

  ${(props) =>
    props.phone !== null
      ? `@media ${bp.PHONE} {
    grid-area: ${props.phone.rowStart || 'auto'} / ${
          props.phone.colStart || itemCfg.colStart
        } / span
      ${props.phone.rowSpan || itemCfg.rowSpan} / span ${props.phone.colSpan || smCfg.colSpan};
  }`
      : ``}

  ${(props) =>
    props.tablet !== null
      ? `@media ${bp.TABLET} {
      grid-area: ${props.tablet.rowStart || 'auto'} / ${
          props.tablet.colStart || itemCfg.colStart
        } / span
        ${props.tablet.rowSpan || itemCfg.rowSpan} / span ${props.tablet.colSpan || smCfg.colSpan};
    }`
      : ``}

  @media ${bp.TABLET_LANDSCAPE} {
    grid-area: ${(props) => props.tabletHz.rowStart || 'auto'} /
      ${(props) => props.tabletHz.colStart || itemCfg.colStart} / span
      ${(props) => props.tabletHz.rowSpan || itemCfg.rowSpan} / span
      ${(props) => props.tabletHz.colSpan || itemCfg.colSpan};
  }

  ${(props) =>
    props.smDesktop !== null
      ? `@media ${bp.SM_DESKTOP} {
    grid-area: ${props.smDesktop.rowStart || 'auto'} / ${
          props.smDesktop.colStart || itemCfg.colStart
        } / span
      ${props.smDesktop.rowSpan || itemCfg.rowSpan} / span ${
          props.smDesktop.colSpan || itemCfg.colSpan
        };
  }`
      : ``}

  ${(props) =>
    props.desktop !== null
      ? `@media ${bp.DESKTOP} {
      grid-area: ${props.desktop.rowStart || 'auto'} / ${
          props.desktop.colStart || itemCfg.colStart
        } / span
        ${props.desktop.rowSpan || itemCfg.rowSpan} / span ${
          props.desktop.colSpan || itemCfg.colSpan
        };
    }`
      : ``}

  ${(props) =>
    props.lgDesktop !== null
      ? `@media ${bp.LG_DESKTOP} {
        grid-area: ${props.lgDesktop.rowStart || 'auto'} / ${
          props.lgDesktop.colStart || itemCfg.colStart
        } / span
          ${props.lgDesktop.rowSpan || itemCfg.rowSpan} / span ${
          props.lgDesktop.colSpan || itemCfg.colSpan
        };
    }`
      : ``}
`;

const GridItem = ({
  subGrid,
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
  >
    {children}
  </StyledDiv>
);

const itemCfgTypes = {
  rowStart: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
  rowSpan: PropTypes.number,
  colStart: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number]),
  colSpan: PropTypes.number,
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
};

GridItem.defaultProps = {
  smPhone: smCfg,
  phone: null,
  tablet: null,
  tabletHz: lgCfg,
  smDesktop: null,
  desktop: null,
  lgDesktop: null,
  subGrid: false,
};

export default GridItem;
