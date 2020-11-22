import { render, screen, cleanup } from '@testing-library/react';
import Grid from '../Grid';
import GridItem from './GridItem';

describe('Grid Item Tests', () => {
  afterEach(cleanup);

  describe.each`
    breakpoint
    ${'smPhone'}
    ${'phone'}
    ${'tablet'}
    ${'tabletHz'}
    ${'smDesktop'}
    ${'desktop'}
    ${'lgDesktop'}
  `('GridItem: $breakpoint breakpoint', ({ breakpoint }) => {
    test.each`
      prop          | val
      ${'colStart'} | ${1}
      ${'colSpans'} | ${1}
      ${'rowStart'} | ${1}
      ${'rowSpan'}  | ${1}
    `('$prop: $val', ({ prop, val }) => {
      const props = { [breakpoint]: { [prop]: val } };
      const innerText = `griditem ${breakpoint}`;
      render(
        <Grid>
          <GridItem {...props}>{innerText}</GridItem>
        </Grid>,
      );
      const gridItem = screen.getByText(innerText);
      expect(gridItem).toBeInTheDocument();
    });
  });
});
