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

  test('Grid item renders with children as a subgrid', () => {
    const innerText = `subgrid griditem test`;
    render(
      <Grid>
        <GridItem subGrid>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('smPhone breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem smPhone`;
    render(
      <Grid>
        <GridItem smPhone={{ [prop]: val }}>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('phone breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem phone`;
    render(
      <Grid>
        <GridItem phone={{ [prop]: val }}>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('tablet breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem tablet`;
    render(
      <Grid>
        <GridItem tablet={{ [prop]: val }}>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('tabletHz breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem tabletHz`;
    render(
      <Grid>
        <GridItem tabletHz={{ [prop]: val }}>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('smDesktop breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem smDesktop`;
    render(
      <Grid>
        <GridItem smDesktop={{ [prop]: val }}>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('desktop breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem desktop`;
    render(
      <Grid>
        <GridItem desktop={{ [prop]: val }}>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('lgDesktop breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem lgDesktop`;
    render(
      <Grid>
        <GridItem lgDesktop={{ [prop]: val }}>{innerText}</GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('smPhone breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem smPhone`;
    render(
      <Grid>
        <GridItem smPhone={{ [prop]: val }} subGrid>
          {innerText}
        </GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('phone breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem phone`;
    render(
      <Grid>
        <GridItem phone={{ [prop]: val }} subGrid>
          {innerText}
        </GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('tablet breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem tablet`;
    render(
      <Grid>
        <GridItem tablet={{ [prop]: val }} subGrid>
          {innerText}
        </GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('tabletHz breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem tabletHz`;
    render(
      <Grid>
        <GridItem tabletHz={{ [prop]: val }} subGrid>
          {innerText}
        </GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('smDesktop breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem smDesktop`;
    render(
      <Grid>
        <GridItem smDesktop={{ [prop]: val }} subGrid>
          {innerText}
        </GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('desktop breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem desktop`;
    render(
      <Grid>
        <GridItem desktop={{ [prop]: val }} subGrid>
          {innerText}
        </GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });

  test.each`
    prop          | val
    ${'colStart'} | ${1}
    ${'colSpans'} | ${1}
    ${'rowStart'} | ${1}
    ${'rowSpan'}  | ${1}
  `('lgDesktop breakpoint: $prop: $val', ({ prop, val }) => {
    const innerText = `griditem lgDesktop`;
    render(
      <Grid>
        <GridItem lgDesktop={{ [prop]: val }} subGrid>
          {innerText}
        </GridItem>
      </Grid>,
    );
    const gridItem = screen.getByText(innerText);
    expect(gridItem).toBeInTheDocument();
  });
});
