import { render, screen, cleanup } from '@testing-library/react';
import Grid from '../Grid';
import GridItem from './GridItem';

describe('Grid Item Tests', () => {
  afterEach(cleanup);

  test('Grid item renders with children', () => {
    const innerText = `griditem test`;
    render(
      <Grid>
        <GridItem>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  describe.each`
    prop                 | val
    ${'hideMobile'}      | ${true}
    ${'hideMobile'}      | ${false}
    ${'hideDesktop'}     | ${true}
    ${'hideDesktop'}     | ${false}
    ${'flex'}            | ${false}
    ${'flex'}            | ${true}
    ${'subGrid'}         | ${false}
    ${'subGrid'}         | ${true}
    ${'justify-content'} | ${'center'}
    ${'align-items'}     | ${'center'}
  `('smDesktop breakpoint: $prop: $val', ({ prop, val }) => {
    describe.each`
      breakpoint
      ${'smPhone'}
      ${'phone'}
      ${'tablet'}
      ${'tabletHz'}
      ${'smDesktop'}
      ${'desktop'}
      ${'lgDesktop'}
    `('smDesktop breakpoint: $prop: $val', ({ breakpoint }) => {
      test.each`
        bpProp        | bpVal
        ${'colStart'} | ${1}
        ${'colStart'} | ${'auto'}
        ${'colSpan'}  | ${1}
        ${'colSpan'}  | ${'auto'}
        ${'rowStart'} | ${1}
        ${'rowStart'} | ${'auto'}
        ${'rowSpan'}  | ${1}
        ${'rowSpan'}  | ${'auto'}
      `(`${breakpoint}:{${prop}:${val}} | $bpProp: $bpVal`, ({ bpProp, bpVal }) => {
        const innerText = `griditem: ${prop}:${val} | ${breakpoint}:{${bpProp}:${bpVal}}`;

        const props = {
          [prop]: val,
          [breakpoint]: { [bpProp]: bpVal },
        };

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
});
