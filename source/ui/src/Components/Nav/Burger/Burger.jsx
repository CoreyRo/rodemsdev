import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  fill: white;
  transition: all 250ms;
  width: 25px;
  height: 25px;
`;

const BaseRect = styled.rect`
  fill: white;
  transition: all 250ms;
  width: 100px;
  height: 10px;
`;

const TopRect = styled(BaseRect)`
  &.clicked {
    transform: rotate(45deg) translate(10%, -18%);
    width: 120px;
  }
`;
const MidRect = styled(BaseRect)`
  y: 30;
  &.clicked {
    opacity: 0;
    transform: translateX(-200px);
  }
`;
const BotRect = styled(BaseRect)`
  y: 60;

  &.clicked {
    transform: rotate(-45deg) translate(-50%, 0%);
    width: 120px;
  }
`;

// eslint-disable-next-line react/display-name
const Burger = forwardRef(({ clicked }, ref) => (
  <Svg viewBox="0 0 100 80" aria-hidden ref={ref} data-testid="burger-svg">
    <TopRect className={clicked ? 'clicked' : ''} />
    <MidRect className={clicked ? 'clicked' : ''} />
    <BotRect className={clicked ? 'clicked' : ''} />
  </Svg>
));

Burger.propTypes = { clicked: PropTypes.bool.isRequired };

export default Burger;
