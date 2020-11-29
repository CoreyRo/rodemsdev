/* eslint-disable no-restricted-globals */
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { cssBreakpoints as bp } from '../../../Utils/CssVariables';

const StyledGridItem = styled.div.attrs((props) => ({ display: props.flex ? 'flex' : 'grid' }))`
  ${(props) => `
  display: ${props.hideMobile ? 'none' : props.display};

  ${props.align ? `align-items: ${props.align};` : ''}
  ${props.justify ? `justify-content: ${props.justify};` : ''}
  ${props.subGrid === true ? `grid-template-columns: inherit;grid-gap: inherit;` : ''}
  grid-area: ${!isNaN(props.smPhone.rowStart) ? `${props.smPhone.rowStart}` : 'auto'} /
  ${!isNaN(props.smPhone.colStart) ? `${props.smPhone.colStart}` : 'auto'} / 
    ${!isNaN(props.smPhone.rowSpan) ? `span ${props.smPhone.rowSpan}` : 'auto'} / 
    ${!isNaN(props.smPhone.colSpan) ? `span ${props.smPhone.colSpan}` : 'auto'};
    @media ${bp.PHONE} {
      ${
        props.phone !== null
          ? `
      grid-area: ${!isNaN(props.phone.rowStart) ? `${props.phone.rowStart}` : 'auto'} /
      ${!isNaN(props.phone.colStart) ? `${props.phone.colStart}` : 'auto'} / 
        ${!isNaN(props.phone.rowSpan) ? `span ${props.phone.rowSpan}` : 'auto'} / 
        ${!isNaN(props.phone.colSpan) ? `span ${props.phone.colSpan}` : 'auto'};
      `
          : ``
      }
    }

    @media ${bp.TABLET} {
      grid-area: ${!isNaN(props.tablet.rowStart) ? `${props.tablet.rowStart}` : 'auto'} /
      ${!isNaN(props.tablet.colStart) ? `${props.tablet.colStart}` : 'auto'} / 
        ${!isNaN(props.tablet.rowSpan) ? `span ${props.tablet.rowSpan}` : 'auto'} / 
        ${!isNaN(props.tablet.colSpan) ? `span ${props.tablet.colSpan}` : 'auto'};
    }

    @media ${bp.TABLET_LANDSCAPE} {
      display: ${props.hideDesktop ? 'none' : props.display};
      grid-area: ${!isNaN(props.tabletHz.rowStart) ? `${props.tabletHz.rowStart}` : 'auto'} /
      ${!isNaN(props.tabletHz.colStart) ? `${props.tabletHz.colStart}` : 'auto'} / 
        ${!isNaN(props.tabletHz.rowSpan) ? `span ${props.tabletHz.rowSpan}` : 'auto'} / 
        ${!isNaN(props.tabletHz.colSpan) ? `span ${props.tabletHz.colSpan}` : 'auto'};
    }

    @media ${bp.SM_DESKTOP} {
      ${
        props.smDesktop !== null
          ? `
      grid-area: ${!isNaN(props.smDesktop.rowStart) ? `${props.smDesktop.rowStart}` : 'auto'} /
      ${!isNaN(props.smDesktop.colStart) ? `${props.smDesktop.colStart}` : 'auto'} / 
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
      grid-area: ${!isNaN(props.desktop.rowStart) ? `${props.desktop.rowStart}` : 'auto'} /
      ${!isNaN(props.desktop.colStart) ? `${props.desktop.colStart}` : 'auto'} / 
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
      grid-area: ${!isNaN(props.lgDesktop.rowStart) ? `${props.lgDesktop.rowStart}` : 'auto'} /
      ${!isNaN(props.lgDesktop.colStart) ? `${props.lgDesktop.colStart}` : 'auto'} / 
        ${!isNaN(props.lgDesktop.rowSpan) ? `span ${props.lgDesktop.rowSpan}` : 'auto'} / 
        ${!isNaN(props.lgDesktop.colSpan) ? `span ${props.lgDesktop.colSpan}` : 'auto'};
      `
          : ``
      }
    }
  `}
`;

const smDefault = {
  rowStart: 'auto',
  rowSpan: 'auto',
  colStart: 'auto',
  colSpan: 4,
};

const tabDefault = {
  rowStart: 'auto',
  rowSpan: 'auto',
  colStart: 'auto',
  colSpan: 6,
};

// eslint-disable-next-line react/display-name
const GridItem = forwardRef(
  (
    {
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
      className,
      children,
      align,
      justify,
      cssClasses,
      flex,
      ...rest
    },
    ref,
  ) => (
    <StyledGridItem
      smPhone={{ ...smDefault, ...smPhone }}
      phone={phone}
      tablet={{ ...tabDefault, ...tablet }}
      tabletHz={{ ...tabDefault, ...tabletHz }}
      smDesktop={smDesktop}
      desktop={desktop}
      lgDesktop={lgDesktop}
      className={`${className} ${cssClasses}`}
      subGrid={subGrid}
      hideMobile={hideMobile}
      hideDesktop={hideDesktop}
      align={align}
      justify={justify}
      flex={flex}
      {...rest}
      ref={ref}
    >
      {children}
    </StyledGridItem>
  ),
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
  className: PropTypes.string,
  align: PropTypes.string,
  justify: PropTypes.string,
  flex: PropTypes.bool,
  cssClasses: PropTypes.string,
};

GridItem.defaultProps = {
  smPhone: smDefault,
  phone: null,
  tablet: null,
  tabletHz: tabDefault,
  smDesktop: null,
  desktop: null,
  lgDesktop: null,
  subGrid: false,
  hideMobile: false,
  hideDesktop: false,
  className: '',
  align: '',
  justify: '',
  cssClasses: '',
  flex: false,
};

export default GridItem;
